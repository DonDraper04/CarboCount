const nodemailer = require("nodemailer");
const models = require("../models");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const sendMail = (receiverMail, subject, content) => {
  // Create a transporter
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.USER,
      pass: process.env.PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  // Email content
  const mailOptions = {
    from: process.env.USER,
    to: receiverMail,
    subject: subject,
    html: content,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error:", error);
    } else {
      console.log("Email sent:", info.response);
    }

    // Close the transporter
    transporter.close();
  });
};
const CreateToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "10d" });
};

function generateVerificationCode(length = 8) {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+";
  let verificationCode = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = crypto.randomInt(0, charset.length);
    verificationCode += charset[randomIndex];
  }
  return verificationCode;
}
function extractStringAfterTag(tagString, fullString) {
  const lastIndex = fullString.lastIndexOf(tagString);
  if (lastIndex !== -1) {
    const substring = fullString.substring(lastIndex + tagString.length).trim();
    const match = substring.match(/>([^>]+)/);
    return match ? match[1].trim() : substring;
  }
  return null;
}
const GetModel = (tags) => {
  switch (tags[0]) {
    case "Electricité": {
      return models.Electricite;
    }
    case "Achats de biens": {
      return models.Achats_de_biens;
    }
    case "Achats de services": {
      return models.Achats_de_services;
    }
    case "Combustibles": {
      return models.Fossiles;
    }
    case "Traitement des déchets": {
      return models.TraitementDechets;
    }
    case "Process et émissions fugitives": {
      return models.TraitementDechets;
    }
    case "Transport de marchandises": {
      return models.TransportMs;
    }
    case "Transport de personnes": {
      return models.TransportPs;
    }
    default: {
      return { error: "unexisting tag" };
    }
  }
};
module.exports = {
  sendMail,
  CreateToken,
  generateVerificationCode,
  extractStringAfterTag,
  GetModel,
};
