const bcrypt = require("bcrypt");
const validator = require("validator");
module.exports = (sequelize, DataTypes) => {
  const Entreprise = sequelize.define("Entreprise", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    registre_commerce: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    verificationCode: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });
  Entreprise.Signup = async function (
    name,
    phone,
    email,
    registre_commerce,
    address
  ) {
    if (!name || !phone || !email || !registre_commerce || !address) {
      throw new Error("All fields are required");
    }
    if (!validator.isEmail(email)) {
      throw new Error("Email is not valid");
    }
    const phone_number_regex = /^(0|\+\d{1,3})\d{9}$/;
    if (!phone_number_regex.test(phone)) {
      throw new Error("Phone number is not valid");
    }
    const emailExists = await Entreprise.findOne({ where: { email } });
    if (emailExists) {
      throw new Error("Email is already in use");
    }
    const phoneExists = await Entreprise.findOne({ where: { phone } });
    if (phoneExists) {
      throw new Error("Phone number is already in use");
    }
    const emailRequestExists = await sequelize.models.Request.findOne({
      where: { email },
    });
    
    if (emailRequestExists !== null && emailRequestExists.status === "accepted") {
      throw new Error("Request already accepted");
    }
    if (emailRequestExists!== null && emailRequestExists.status === "pending") {
      throw new Error("Request is pending");
    }
    const requestMade = await sequelize.models.Request.create({
      name,
      phone,
      email,
      registre_commerce,
      address,
    });
    return requestMade;
  };
  Entreprise.Login = async function (email, password) {
    try{ 
      if (!email || !password) {
      throw new Error("All fields are required");
    }
    if (!validator.isEmail(email)) {
      throw new Error("Email is not valid");
    }
    const entreprise = await Entreprise.findOne({ where: { email } });
    if (!entreprise) {
      throw new Error("Email not found");
    }
    const passwordMatch = await bcrypt.compare(password, entreprise.password);
    if (!passwordMatch) {
      throw new Error("Password is incorrect");
    }
    return entreprise;
    } catch (error) {
      console.error("Error:", error.message);
   }
 
  };
  // Define associations
  Entreprise.associate = (models) => {
    // Example of a one-to-one association
    Entreprise.hasOne(models.Request, { foreignKey: "email" });

    // Define other associations as needed
  };
  return Entreprise;
};