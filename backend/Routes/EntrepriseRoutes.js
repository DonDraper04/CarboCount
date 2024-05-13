const express = require("express");
const {
  CreateAccount,
  CreateRequestForAccount,
  Login,
  ChangePassword,
  ForgotPassword,
  ResetPassword,
} = require("../Controllers/EntrepriseControllers");
const { Entreprise_Auth } = require("../requireAuth/requireAuth");
const router = express.Router();

router.post("/api/Entreprise/CreateAccountRequest", CreateRequestForAccount);
router.post("/api/Entreprise/CreateAccount", CreateAccount);
router.post("/api/Entreprise/login", Login);
router.post("/api/Entreprise/ChangePassword", Entreprise_Auth, ChangePassword);
router.post("/api/Entreprise/ForgotPassword", ForgotPassword);
router.post("/api/Entreprise/ResetPassword", ResetPassword);

module.exports = router;