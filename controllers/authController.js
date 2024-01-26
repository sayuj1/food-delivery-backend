const User = require('../models/User');
const { getDbErrorMessage } = require('../utils/errorUtil');

exports.register = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email: email });

    if (user) {
      return res.status(422).json({
        success: false,
        error: 'Please use different email',
      });
    }

    user = await User.create({
      email,
      password,
    });

    user = await User.findById(user._id);

    sendTokenResponse(user, res);
  } catch (error) {
    if (error.name === "ValidationError") {
      let errors = getDbErrorMessage(error);
      return res.status(400).send({ success: false, error: errors });
    }
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email: email }).select('+password');

    if (!user) {
      return res
        .status(401)
        .json({ success: false, error: 'Invalid credentials' });
    }
    const isMatch = await user.matchPassword(password);

    if (!isMatch) {
      return res
        .status(401)
        .json({ success: false, error: 'Invalid credentials' });
    }

    sendTokenResponse(user, res);
  } catch (error) {
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
};

exports.logout = async (req, res) => {
  try {
    const options = {
      expires: new Date(Date.now() + 60 * 1000),
      httpOnly: true,
    };

    //* Enable https for production
    if (process.env.NODE_ENV === 'production') {
      options.secure = true;
    }

    res.status(200).cookie('token', 'none', options).json({ success: true, token: 'none' });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Something went wrong' });
  }
};

//* Generate jwt token
const sendTokenResponse = async (user, res) => {
  try {
    const { success, token, error } = await user.getSignedJwtToken();

    if (success === false) {
      return res.status(500).json({
        success,
        error,
      });
    }

    const options = {
      expires: new Date(
        Date.now() + process.env.JWT_COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,
    };

    //* Enable https for production
    if (process.env.NODE_ENV === 'production') {
      options.secure = true;
    }

    res
      .status(200)
      .cookie('token', token, options)
      .json({ success: true, token: token });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: 'Failed to generate token, Please try again',
    });
  }
};