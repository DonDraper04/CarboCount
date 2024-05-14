module.exports = (sequelize, DataTypes) => {
  const BilanCarbon = sequelize.define("BilanCarbon", {
    BilanCarbonId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    total: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    year: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  });

  //association with entreprise
  BilanCarbon.associate = (models) => {
    BilanCarbon.belongsTo(models.Entreprise, {
      foreignKey: {
        allowNull: false,
      },
    });
  };
  return BilanCarbon;
};
