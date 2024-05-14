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
router.post("/api/Entreprise/CheckToken",async (req, res) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: "Authorization is required" });
  }
  const token = authorization.split(" ")[1];
  try {
    const decodedToken = jwt.verify(token, process.env.SECRET);

    // Check if token is expired
    if (Date.now() >= decodedToken.exp * 1000) {
      return res.status(401).json({ error: "Token is expired" });
    }
    const { _id } = decodedToken;
    const user = await models.Entreprise.findOne({ where: { id: _id } });
    if (!user) {
      return res.status(401).json({ error: "User not found" });
    }
    res.status(200).json({
      token,
      entreprise: { ...user.dataValues, password: undefined },
    });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
router.post("/api/Entreprise/ChangePassword", Entreprise_Auth, ChangePassword);
router.post("/api/Entreprise/ForgotPassword", ForgotPassword);
router.post("/api/Entreprise/ResetPassword", ResetPassword);

module.exports = router;