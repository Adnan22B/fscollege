const {Sequelize, Model, DataTypes} = require('sequelize');
const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: "fsc.db"
});

class SignupModel extends Model{};

SignupModel.init({
    fullName: {
        type: DataTypes.STRING, 
    },
    userName: {
        type: DataTypes.STRING, 
    },
    userEmail: {
        type: DataTypes.STRING, 
    },
    password: {
        type: DataTypes.STRING,  
    },
    confirmPassword: {
        type: DataTypes.STRING,   
    }
}, {sequelize, modelName: 'SignupModel'}); 
  
module.exports = {SignupModel};