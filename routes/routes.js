const authRoute = require("./auth");
const restaurantRoute = require('./restaurant')

const configRoutes = app => {
  app.use("/auth", authRoute);
  app.use("/restaurants", restaurantRoute)
};

module.exports = { configRoutes };
