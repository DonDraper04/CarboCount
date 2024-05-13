module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define("Category", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Total:{
            type: DataTypes.FLOAT,
            allowNull: true,
        }
    });
    Category.associate = (models) => {
        Category.belongsTo(models.BilanCarbon, {
            foreignKey: {
                name: "BilanCarbonId",
                allowNull: false,
            },
            onDelete: "CASCADE",
        });
        Category.hasMany(models.Activity, {
            foreignKey: {
                name: "CategoryId",
                allowNull: false,
            },
            onDelete: "CASCADE",
        });
        Category.belongsTo(models.Scope, {
            foreignKey: {
                name: "ScopeId",
                allowNull: false,
            },
            onDelete: "CASCADE",
        });
    };
    return Category;
}