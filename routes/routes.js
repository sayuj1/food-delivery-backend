const authRoute = require("./auth");
const userRoute = require("./user");

const configRoutes = app => {
  app.use("/auth", authRoute);
  app.use("/user", userRoute);
};

module.exports = { configRoutes };
