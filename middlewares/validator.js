exports.validateAuthInputFields = (req, res, next) => {
  let allErrors = {};
  const { email, password } = req.body;
  if (email.trim() === "") {
    allErrors.email = "Email is Required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    allErrors.email = "Please enter a valid Email Address";
  }

  if (password.trim() === "") {
    allErrors.password = "Password is Required";
  } else if (password.trim().length < 8) {
    allErrors.password = "Password shoulbe have mininum 8 Characters";
  }

  if (Object.values(allErrors).some((error) => error)) {
    return res.status(400).json({ success: false, error: allErrors });
  }
  next();
}