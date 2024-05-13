const fs = require("fs");
const csv = require("csv-parser");
const Sequelize = require("sequelize");
const modules = require("./models"); // assuming your model file is named 'models.js'
const Achatsdebiens = require("./models/Achatsdebiens");
const sequelize = new Sequelize("projet_2cp", "root", "JuveJuve2927", {
  host: "localhost",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
  console.log(modules);
  fs.createReadStream("transport de marchanise.csv")
  .pipe(csv())
  .on("data", (row) => {
    // console.log(row["Ligne"]);
    modules.TransportMs.create({
      ObjectId: row['Identifiant de l\'élément'],
      Type: row['Ligne'],
      Structure: row['Structure'],
      Id_number: parseInt(row['Identifiant de l\'élément']),
      Unity: row['Unité français'],
      Nom_attribut_francais: row['Nom attribut français'],
      Nom_base_français: row['Nom base français'],
      Nom_frontiere_francais: row['Nom frontière français'],
      Type_poste: row['Type poste'],
      Category: row['Code de la catégorie'],
      Tag_francais: row['Tags français'],
      Localisation: row['Localisation géographique'],
      Sous_localisation: row['Sous-localisation géographique français'],
      Incertitude: row['Incertitude'],
      Percentage: parseFloat(row['Total poste non décomposé']),
      Reglementation: row['Transparence'],
      Scope:3,
      Post: parseFloat(row['Total poste non décomposé'].replace(',', '.'))
    });
  })
  .on("end", () => {
    console.log("CSV file successfully processed");
  });


