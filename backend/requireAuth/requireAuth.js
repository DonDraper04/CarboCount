const jwt = require("jsonwebtoken");
const models = require("../models");
const Client_Auth = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: "Authorization is required" });
  }
  const token = authorization.split(" ")[1];
  try {
    const decodedToken = jwt.verify(token, process.env.SECRET);
    console.log(decodedToken);
    // Check if token is expired
    if (Date.now() >= decodedToken.exp * 1000) {
      return res.status(401).json({ error: "Token is expired" });
    }

    const { _id } = decodedToken;
    console.log(_id);
    req.user = await models.Client.findOne({ where: { id: _id } });
    console.log(req.user.id);
    next();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const Admin_Auth = async (req, res, next) => {
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
    req.user = await models.Admin.findOne({ where: { id: _id } });
    next();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const Entreprise_Auth = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ error: "Authorization is required" });
  }
  const token = authorization.split(" ")[1];
  console.log("AA");
  try {
    const decodedToken = jwt.verify(token, process.env.SECRET);

    // Check if token is expired
    if (Date.now() >= decodedToken.exp * 1000) {
      return res.status(401).json({ error: "Token is expired" });
    }

    const { _id } = decodedToken;
    console.log("AA");
    req.user = await models.Entreprise.findOne({ where: { id: _id } });
    console.log("AA");
    next();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  Client_Auth,
  Admin_Auth,
  Entreprise_Auth,
};