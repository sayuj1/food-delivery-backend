const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    // mongoose.set('debug', true);

    console.log(
      `MongoDB connected: ${process.env.MONGO_URI}`);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

const closeDB = async () => {
  try {
    await mongoose.disconnect();
    console.log('MongoDB disconnected');
  } catch (err) {
    console.error(err.message);
  }
};

module.exports = { connectDB, closeDB };
