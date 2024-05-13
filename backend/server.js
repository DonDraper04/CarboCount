const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const models = require("./models");
const PORT = process.env.PORT || 8080;

const AdminRoutes = require("./Routes/AdminRoutes");
const EntrepriseRoutes = require("./Routes/EntrepriseRoutes");
const CalculRoutes = require("./Routes/CalculRoutes");
const BilanRoutes = require("./Routes/BilanRoutes");
const CategoryRoutes = require("./Routes/CategoryRoutes");
const ActivityRoutes = require("./Routes/ActivityRoutes");
const ScopeRoutes = require("./Routes/ScopeRoutes");

app.use(AdminRoutes);
app.use(EntrepriseRoutes);
app.use(CalculRoutes);
app.use(BilanRoutes);
app.use(CategoryRoutes);
app.use(ActivityRoutes);
app.use(ScopeRoutes);

app.listen(PORT, () => {
  console.log("server is running on port ", PORT);
  models.sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
    })
    .catch((error) => {
      console.error("Unable to connect to the database:", error);
    });
});
