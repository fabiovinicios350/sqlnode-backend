const { Model,DataTypes } = require('sequelize');
const User = require('../models/User');
const Address = require('../models/Address');
const { index } = require('./userController');

module.exports = {
  async store(req,res){
    const { user_id } = req.params;
    const { zipcode,street,number } = req.body;

    const user = await User.findByPk(user_id);

    if(!user){
      return res.json({ erro: " Usuario nao existe !" });
    }

    const address = await Address.create({
      zipcode,
      street,
      number,
      user_id
    });

    return res.json(address);
  },
  async index(req,res){
    const { user_id } = req.params;

    const user = await User.findByPk(user_id,{
      attributes: ['id','name'],
      include: { 
        association : 'address',
        attributes:['zipcode','street','number']
       }
   });
   
   return res.json(user);
   
  }
};