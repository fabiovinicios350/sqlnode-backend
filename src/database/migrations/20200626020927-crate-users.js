'use strict';

const sequelize = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', { 
       id: {
         type: sequelize.INTEGER,
         allowNull:false,
         primaryKey:true,
         autoIncrement:true
       },
       name:{
         type: sequelize.STRING,
         allowNull:false
       }, 
       email:{
         type: sequelize.STRING,
         allowNull:false
       },
       created_at:{
         type: sequelize.DATE,
         allowNull:false
       },
       updated_at:{
         type: sequelize.DATE,
         allowNull:false
       } 
      });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};
