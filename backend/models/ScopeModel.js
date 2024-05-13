module.exports = (sequelize, DataTypes) => {
  const Scope = sequelize.define("Scope", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
  });
  Scope.associate = (models) => {
    Scope.hasMany(models.Category, {
      foreignKey: {
        name: "ScopeId",
        allowNull: false,
      },
      onDelete: "CASCADE",
    });
    Scope.hasMany(models.Activity, {
      foreignKey: {
        name: "ScopeId",
        allowNull: false,
      },
      onDelete: "CASCADE",
    });
    Scope.belongsTo(models.BilanCarbon, {
      foreignKey: {
        name: "BilanCarbonId",
        allowNull: false,
      },
      onDelete: "CASCADE",
    });
  };
  return Scope;
};
