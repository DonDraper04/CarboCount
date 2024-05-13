const models = require("../models");
const { Op, where } = require("sequelize");
const _ = require("lodash");
const { extractStringAfterTag, GetModel } = require("../utils/utils");

const getSubTag = async (req, res) => {
  const { tags } = req.body;
  if (!tags) {
    return res.status(200).json({ error: "tags field is required" });
  }
  if (tags.length === 0) {
    return res.status(200).json({ error: "tags array should not be empty" });
  }
  const Model = GetModel(tags);
  
  if (Model.error) {
    return res.status(200).json({ error: Model.error });
  }
  const TagString = tags.join(" > "); //convert array to string
  try {
    const SubTags = await Model.findAll({
      attributes: ["Category"],
      where: {
        Category: {
          [Op.like]: `${TagString}%`,
        },
      },
      distinct: true, // Ensure uniqueness
    });
    if (SubTags.length === 0) {
      return res.status(200).json({ error: "No category with such tags" });
    }
    // console.log(ElectSubTags.map((item) => item.Category))
    let uniqSubTags = Array.from(new Set(SubTags.map((item) => item.Category)));
    // get the tag between > that comes after TagString and before the next one >
    let Tags = [];
    uniqSubTags.forEach((e) => {
      Tags.push({ tag: extractStringAfterTag(TagString, e) });
    });
    uniqSubTags = [];
    uniqSubTags = Array.from(new Set(Tags.map((item) => item.tag)));
    if ((uniqSubTags.length === 1) && (uniqSubTags[0] === "")) {
      return res.status(200).json({ error: "Thats all the tags there" });
    }
    return res.status(200).json({ uniqSubTags });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
const getDocumentsWithTags = async (req, res) => {
  const { tags } = req.body;
  if (!tags) {
    return res.status(400).json({ error: "tags field is required" });
  }
  if (tags.length == 0) {
    return res.status(400).json({ error: "tags array should not be empty" });
  }

  const Model = GetModel(tags);
  if (Model.error) {
    return res.status(400).json({ error: Model.error });
  }
  const TagString = tags.join(" > ");
  try {
    const docs = await Model.findAll({
      where: {
        Category: {
          [Op.like]: `${TagString}%`,
        },
      },
      distinct: true, // Ensure uniqueness
    });
    if (!docs) {
      res.status(400).json({ error: "No documents with such tags" });
    }
    res.status(200).json({ docs });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getElectDocsWithFrancaistag = async (req, res) => {
  const { tagFrancais, tags } = req.body;
  if (!tagFrancais) {
    return res.status(400).json({ error: "francaisName field is required" });
  }
  if (!tags) {
    return res.status(400).json({ error: "tags field is required" });
  }
  const TagString = tags.join(" > ");
  try {
    const docs = await models.Electricite.findAll({
      where: {
        Category: {
          [Op.like]: `${TagString}%`,
        },
        Tag_francais: `%${tagFrancais}%`,
      },
    });
    if (!docs) {
      res.status(400).json({ error: "No documents with such tags" });
    }
    res.status(200).json({ docs });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getNomBaseFrancais = async (req, res) => {
  const { tags } = req.body;
  if (!tags) {
    return res.status(400).json({ error: "tags field is required" });
  }
  if (tags.length == 0) {
    return res.status(400).json({ error: "tags array should not be empty" });
  }
  const Model = GetModel(tags);
  if (Model.error) {
    return res.status(400).json({ error: Model.error });
  }
  const TagString = tags.join(" > ");
  try {
    const docs = await Model.findAll({
      where: {
        Category: {
          [Op.like]: `${TagString}%`,
        },
      },
      attributes: ["Nom_base_francais"],
      distinct: true, // Ensure uniqueness
    });
    if (!docs) {
      res.status(400).json({ error: "No documents with such tags" });
    }
    let uniqDocs = Array.from(
      new Set(docs.map((item) => item["Nom_base_francais"]))
    );
    res.status(200).json({ uniqDocs });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getNomAttributFrancais = async (req, res) => {
  const { tags, NomBaseFrancais } = req.body;
  if (!tags) {
    return res.status(400).json({ error: "tags field is required" });
  }
  if (tags.length == 0) {
    return res.status(400).json({ error: "tags array should not be empty" });
  }
  if (!NomBaseFrancais) {
    return res.status(400).json({ error: "NomBaseFrancais field is required" });
  }
  const Model = GetModel(tags);
  const TagString = tags.join(" > ");
  try {
    const docs = await Model.findAll({
      where: {
        Category: {
          [Op.like]: `${TagString}%`,
        },
        nom_base_francais: NomBaseFrancais,
      },
      attributes: ["Nom_attribut_francais"],
      distinct: true, // Ensure uniqueness
    });
    if (!docs) {
      res.status(400).json({ error: "No documents with such tags" });
    }
    let uniqDocs = Array.from(
      new Set(docs.map((item) => item["Nom_attribut_francais"]))
    );
    res.status(200).json({ uniqDocs });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getNomsFrontiereFrancais = async (req, res) => {
  const { tags, NomBaseFrancais, NomAttributFrancais } = req.body;
  if (!tags) {
    return res.status(400).json({ error: "tags field is required" });
  }
  if (tags.length == 0) {
    return res.status(400).json({ error: "tags array should not be empty" });
  }
  if (!NomBaseFrancais) {
    return res.status(400).json({ error: "NomBaseFrancais field is required" });
  }
  if (!NomAttributFrancais) {
    return res
      .status(400)
      .json({ error: "NomAttributFrancais field is required" });
  }
  const Model = GetModel(tags);
  const TagString = tags.join(" > ");
  try {
    const docs = await Model.findAll({
      where: {
        Category: {
          [Op.like]: `${TagString}%`,
        },
        nom_base_francais: NomBaseFrancais,
        nom_attribut_francais: NomAttributFrancais,
      },
      attributes: ["Nom_frontiere_francais"],
      distinct: true, // Ensure uniqueness
    });
    if (!docs) {
      res.status(400).json({ error: "No documents with such tags" });
    }
    let uniqDocs = Array.from(
      new Set(docs.map((item) => item["Nom_frontiere_francais"]))
    );
    res.status(200).json({ uniqDocs });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const CheckifLineUnique = async (req, res) => {
  const { tags, NomBaseFrancais, NomAttributFrancais, NomFrontiereFrancais } =
    req.body;
  if (!tags) {
    return res.status(400).json({ error: "tags field is required" });
  }
  if (tags.length == 0) {
    return res.status(400).json({ error: "tags array should not be empty" });
  }
  if (!NomBaseFrancais) {
    return res.status(400).json({ error: "NomBaseFrancais field is required" });
  }
  if (!NomAttributFrancais) {
    return res
      .status(400)
      .json({ error: "NomAttributFrancais field is required" });
  }
  if (!NomFrontiereFrancais) {
    return res
      .status(400)
      .json({ error: "NomFrontiereFrancais field is required" });
  }
  const Model = GetModel(tags);
  const TagString = tags.join(" > ");
  try {
    const docs = await Model.findAll({
      where: {
        Category: {
          [Op.like]: `${TagString}%`,
        },
        nom_base_francais: NomBaseFrancais,
        nom_attribut_francais: NomAttributFrancais,
        nom_frontiere_francais: NomFrontiereFrancais,
      },
    });
    if (!docs) {
      res.status(400).json({ error: "No documents with such tags" });
    }
    let uniqDocs = Array.from(new Set(docs.map((item) => item.Id_number)));
    if (uniqDocs.length > 1) {
      res.status(400).json({ error: "The line is not unique", docs });
    }
    res.status(200).json({ uniqDocs });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getLineUnite = async (req, res) => {
  const { Id_number, type } = req.body;
  if (!Id_number) {
    res.status(400).json({ error: "Id_number is requiered" });
  }
  if (!type) {
    res.status(400).json({ error: "type is required" });
  }
  const Model = GetModel([type]);
  if (Model.error) {
    res.status(400).json({ error: Model.error });
  }
  try {
    const Line = await Model.findOne({
      where: {
        Id_number,
      },
    });
    if (!Line) {
      res.status(400).json({ error: "Line not found" });
    }
    const unite = Line.Unity.split("/")[1];

    res.status(200).json({ Line, unite });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
module.exports = {
  getSubTag,
  getDocumentsWithTags,
  getElectDocsWithFrancaistag,
  getNomBaseFrancais,
  getNomAttributFrancais,
  getNomsFrontiereFrancais,
  CheckifLineUnique,
  getLineUnite
};
