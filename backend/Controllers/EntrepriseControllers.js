const models = require("../models");
const request = require("../models/RequestModel");
const bcrypt = require("bcrypt");
const { CreateToken } = require("../utils/utils");
const validator = require("validator");
const { sendMail, generateVerificationCode } = require("../utils/utils");
const CreateRequestForAccount = async (req, res) => {
  const { name, phone, email, registre_commerce, address } = req.body;
  try {
    // console.log(models)
    const requestMade = await models.Entreprise.Signup(
      name,
      phone,
      email,
      registre_commerce,
      address
    );
    res.json(requestMade);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const CreateAccount = async (req, res) => {
  const { email, password, verifCode } = req.body;
  try {
    if (!email || !password || !verifCode) {
      throw new Error("Missing required fields");
    }
    const requestMade = await models.Request.findOne({ where: { email: email } });
    if (requestMade === null) {
      throw new Error("Request not found");
    }
    if (requestMade.status === "refused") {
      throw new Error("Request not accepted");
    }
    if (requestMade.status === "pending") {
      throw new Error("Request is pending");
    }
    console.log("verifCode:", verifCode);
    console.log(requestMade.id);
    console.log("requestMade.code:", requestMade.code);
    if (requestMade.code !== verifCode) {
      throw new Error("Invalid verification code");
    }
    const emailExists = await models.Entreprise.findOne({ where: { email: email } });
    if (emailExists) {
      throw new Error("Email is already in use");
    }
    const phoneExists = await models.Entreprise.findOne({
      where: { phone: requestMade.phone },
    });
    if (phoneExists) {
      throw new Error("Phone number is already in use");
    }
    if (
      !validator.isStrongPassword(password, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 0,
      })
    ) {
      throw new Error("Password is not strong enough");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newAccount = {
      email,
      password: hashedPassword,
      phone: requestMade.phone,
      name: requestMade.name,
      address: requestMade.address,
      registre_commerce: requestMade.registre_commerce,
    };
    const entrepriseCreated = await models.Entreprise.create(newAccount);
    const token = CreateToken(entrepriseCreated.id);
    res.json({
      token,
      entreprise: { ...entrepriseCreated.dataValues, password: undefined },
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const ChangePassword = async (req, res) => {
  const {oldPassword, newPassword } = req.body;
  const id = req.user.id;
  console.log(id);

  try {
    if (!id || !oldPassword || !newPassword) {
      throw new Error("Missing required fields");
    }
    if(oldPassword === newPassword){
      throw new Error("Old password and new password are the same")
    }
    console.log("A");
    const entreprise = await models.Entreprise.findOne({ where: { id: id } });
    console.log("A");
    if (!entreprise) {
      throw new Error("Email not found");
    }
    console.log(entreprise.email);
    const isMatch = await bcrypt.compare(oldPassword, entreprise.password);
    if (!isMatch) {
      throw new Error("Invalid password");
    }
    if (
      !validator.isStrongPassword(newPassword, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 0,
      })
    ) {
      throw new Error("Password is not strong enough");
    }
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    entreprise.password = hashedPassword;
    await entreprise.save();
    const content = "Your password has been changed successfully"
    sendMail(entreprise.email, "Password changed", content);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const ForgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    if (!email) {
      throw new Error("Email is required");
    }
    const entreprise = await models.Entreprise.findOne({ where: { email: email } });
    if (!entreprise) {
      throw new Error("Account not found");
    }
    const code = generateVerificationCode(15);
    const content = `Your reset password code is: ${code}`;
    await entreprise.update({ verificationCode: code });
    sendMail(email, "Reset password", content);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const ResetPassword = async (req, res) => {
  const { email, newPassword, verifCode } = req.body;
  try {
    if (!email || !newPassword || !verifCode) {
      throw new Error("Missing required fields");
    }
    const entreprise = await models.Entreprise.findOne({ where: { email: email } });
    if (!entreprise) {
      throw new Error("Account not found");
    }
    if (entreprise.verificationCode !== verifCode) {
      throw new Error("Invalid verification code");
    }
    if (
      !validator.isStrongPassword(newPassword, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 0,
      })
    ) {
      throw new Error("Password is not strong enough");
    }
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    entreprise.password = hashedPassword;
    entreprise.verificationCode = null;
    await entreprise.save();
    res.json({ message: "Password reset successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const Login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const entrepriseCompte = await models.Entreprise.Login(email, password);
    if (!entrepriseCompte) {
      throw new Error("Invalid email or password"); // Throw an error if login fails
    }
    const token = CreateToken(entrepriseCompte.id);
    res.json({
      token,
      entreprise: { ...entrepriseCompte.dataValues, password: undefined },
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = {
  CreateAccount,
  CreateRequestForAccount,
  Login,
  ChangePassword,
  ForgotPassword,
  ResetPassword,
};