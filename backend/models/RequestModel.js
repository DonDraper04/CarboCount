const Entreprise = require("./EntrepriseModel");
module.exports = (sequelize, DataTypes) => {
const Request = sequelize.define(
  "Request",
  {
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
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    registre_commerce: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    status: {
      type: DataTypes.ENUM("accepted", "refused", "pending"),
      allowNull: false,
      defaultValue: "pending", // Optional: Set a default value if needed
    },
    code:{
      type: DataTypes.STRING,
      allowNull: true,
    }
  },
  {
    timestamps: true, // This enables timestamps
    createdAt: "created_at", // Optional: Customize the field name for createdAt
    updatedAt: "updated_at", // Optional: Customize the field name for updatedAt
  }
);
 // Define associations
 Request.associate = models => {
    // Example of a one-to-one association
    Request.belongsTo(models.Entreprise, { foreignKey: 'email' });

    // Define other associations as needed
  };
return Request;
};