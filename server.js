const express = require('express');
const dotenv = require('dotenv');
const { connectDB } = require('./config/dbconfig');
const path = require('path');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { configRoutes } = require("./routes/routes");

//* Loading evn vars
dotenv.config({ path: './config/default.env' });

//* Connecting to the database
connectDB();

const app = express();

app.use(cors());

//* Body parser
app.use(express.json());

//* Cookie parser
app.use(cookieParser());

//* Set static folder
app.use(express.static(path.join(__dirname, 'public')));

configRoutes(app);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () =>
  console.log(`Server listening at PORT: ${PORT}`)
);
