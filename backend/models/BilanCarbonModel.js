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
        scope1: {
        type: DataTypes.FLOAT,
        allowNull: true, 
        },
        scope2: {
            type: DataTypes.FLOAT,
            allowNull: true, 
            },
        scope3: {
                type: DataTypes.FLOAT,
                allowNull: true, 
                },
        year: {
        type: DataTypes.INTEGER,
        allowNull: true,
        }

    });
    
    return BilanCarbon;

}