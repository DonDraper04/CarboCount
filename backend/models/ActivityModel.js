module.exports = (sequelize, DataTypes) => {
  const Activity = sequelize.define("Activity", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    empreint: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
  });
  Activity.associate = (models) => {
    Activity.belongsTo(models.Category, {
      foreignKey: {
        name: "CategoryId",
        allowNull: false,
      },
      onDelete: "CASCADE",
    });
    Activity.belongsTo(models.Scope, {
      foreignKey: {
        name: "ScopeId",
        allowNull: false,
      },
      onDelete: "CASCADE",
    });
  };
  return Activity;
};
