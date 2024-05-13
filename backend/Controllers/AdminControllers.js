const models = require("../models");
const {
  sendMail,
  CreateToken,
  generateVerificationCode,
} = require("../utils/utils");
const AcceptRequest = async (req, res) => {
  const { id } = req.params;
  try {
    const request = await models.Request.findOne({
      where: {
        id,
      },
    });
    if (!request) {
      throw new Error("Request not found");
    }
    if (request.status === "accepted") {
      throw new Error("Request already accepted");
    }
    if (request.status === "refused") {
      throw new Error("Request already refused");
    }
    request.status = "accepted";
    let code = generateVerificationCode(15);
    let codeExists = await models.Request.findOne({ where: { code } });
    while (codeExists) {
      code = generateVerificationCode(15);
      codeExists = await models.Request.findOne({ where: { code } });
    }
    request.code = code;
    await request.save();
    const content = `Your request was accepted you can create a new account now. Your verification code is: ${code}`;
    sendMail(request.email, "Request accepted", content);
    res.status(200).json({ message: "Request accepted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const RefuseRequest = async (req, res) => {
  const { id } = req.params;
  try {
    const request = await models.Request.findOne({
      where: {
        id,
      },
    });
    if (!request) {
      throw new Error("Request not found");
    }
    if (request.status === "accepted") {
      throw new Error("Request already accepted");
    }
    if (request.status === "refused") {
      throw new Error("Request already refused");
    }
    await request.destroy();
    const content = `Your request was refused`;
    sendMail(request.email, "Request refused", content);
    res.status(200).json({ message: "Request refused" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await models.Admin.Login(email, password);
    if (!admin) {
      throw new Error("Invalid credentials");
    }
    const token = CreateToken(admin.id);
    res.json({ token, admin: { name: admin.name, email: admin.email } });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const GetAllRequests = async (req, res) => {
  try {
    const requests = await models.Request.findAll();
    res.json(requests);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  AcceptRequest,
  RefuseRequest,
  login,
  GetAllRequests,
};