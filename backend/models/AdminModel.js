const bcrypt = require("bcrypt");
module.exports = (sequelize, DataTypes) => {
  const admin = sequelize.define("Admin", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
  admin.Login = async function (email, password) {
    if (!email || !password) {
      throw new Error("All fields are required");
    }
    const dd = await admin.findOne({ where: { email } });
    console.log(dd)
    if (!admin) {
      throw new Error("Invalid credentials");
    }
    console.log(dd.password)
    const isMatch = password === dd.password;
    if (!isMatch) {
      throw new Error("Invalid credentials");
    }
    return dd;
  };
  return admin;
};