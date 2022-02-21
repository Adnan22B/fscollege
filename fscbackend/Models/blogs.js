const {Sequelize, Model, DataTypes} = require('sequelize');
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "fsc.db"
});

class blogModel extends Model {}
blogModel.init({
    blogTitle: {
        type: DataTypes.STRING,
        require: true,
        allowNull: false
    },
    blogSubTitle: DataTypes.STRING,
    blogDescription: DataTypes.STRING,
    blogQuote: DataTypes.STRING,
    uploadDate: DataTypes.DATE,
}, {sequelize, modelName: 'blogModel'});
  
module.exports = {blogModel};