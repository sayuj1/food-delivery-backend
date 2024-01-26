const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { promisify } = require('util');

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is Required'],
      unique: true,
      trim: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        'Please provide a valid Email',
      ],
    },
    password: {
      type: String,
      required: [true, 'Password is Required'],
      select: false,
    },
  },
  { timestamps: true }
);

//* Encrypt password using bcryptjs
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

//* Match user entered password to hashed password in database
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

//* Sign JWT and return
UserSchema.methods.getSignedJwtToken = async function () {
  try {
    const jwts = promisify(jwt.sign);
    const token = await jwts({ id: this.id }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
      algorithm: process.env.JWT_ALGORITHM
    });
    return { success: true, token: token };
  } catch (error) {
    console.log(error)
    return {
      success: false,
      error: 'Failed to generate token, Please try again',
    };
  }
};

module.exports = User = mongoose.model('User', UserSchema);
