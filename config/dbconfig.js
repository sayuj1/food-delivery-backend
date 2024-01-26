const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `MongoDB connected: ${process.env.MONGO_URI}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
};

const closeDB = async () => {
  try {
    await mongoose.disconnect();
    console.log('MongoDB disconnected');
  } catch (error) {
    console.error(error.message);
  }
};

module.exports = { connectDB, closeDB };
