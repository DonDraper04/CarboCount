module.exports = (sequelize, DataTypes) => {
    const TraitementDechets= sequelize.define("TraitementDechets", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      Type: {
        type: DataTypes.STRING,
      },
      Structure: {
        type: DataTypes.STRING,
      },
      Id_number: {
        type: DataTypes.INTEGER,
      },
      Unity: {
        type: DataTypes.STRING,
      },
      Nom_attribut_francais: {
        type: DataTypes.STRING,
      },
      Nom_base_français: {
        type: DataTypes.STRING,
      },
      Nom_frontiere_francais: {
        type: DataTypes.STRING,
      },
      Type_poste: {
        type: DataTypes.STRING,
      },
      Category: {
        type: DataTypes.STRING,
      },
      Tag_francais: {
        type: DataTypes.STRING,
      },
  
      Localisation: {
        type: DataTypes.STRING,
      },
      Sous_localisation: {
        type: DataTypes.STRING,
      },
      Incertitude: {
        type: DataTypes.STRING,
      },
      Percentage: {
        type: DataTypes.FLOAT,
      },
      Reglementation: {
        type: DataTypes.STRING,
      },
      CO2: {
        type: DataTypes.FLOAT,
      },
      CH4f: {
        type: DataTypes.FLOAT,
      },
      CH4b: {
        type: DataTypes.FLOAT,
      },
      N2O: {
        type: DataTypes.FLOAT,
      },
      Scope: {
        type: DataTypes.FLOAT,
      },
      Post: {
        type: DataTypes.NUMBER,
      },
    });
    return TraitementDechets ;
  };
  