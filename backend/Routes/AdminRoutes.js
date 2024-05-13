const express = require("express");
const {
  login,
  AcceptRequest,
  RefuseRequest,
    GetAllRequests,
} = require("../Controllers/AdminControllers");
const bcrypt = require("bcrypt");
const models = require("../models");
const { Admin_Auth } = require("../requireAuth/requireAuth");
const router = express.Router();
router.post("/api/Admin/login", login);
router.post("/api/Admin/AcceptRequest/:id", Admin_Auth, AcceptRequest);
router.post("/api/Admin/RefuseRequest/:id", Admin_Auth, RefuseRequest);
router.get("/api/Admin/GetAllRequests", Admin_Auth, GetAllRequests);
module.exports = router;