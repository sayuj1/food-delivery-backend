const authRoute = require("./auth");
const restaurantRoute = require('./restaurant')

const configRoutes = app => {

  app.use("/auth", authRoute);
  app.use("/restaurants", restaurantRoute);
  app.use('/', (req, res) => {
    res.send('index.html');
  });
};

module.exports = { configRoutes };
