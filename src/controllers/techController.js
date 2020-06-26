const User = require("../models/User");
const Tech = require("../models/Tech");
const { store } = require("./userController");

module.exports = {
  async store(req,res){
    const { user_id } = req.params;
    const { name } = req.body;

    const user = await User.findByPk(user_id);

    if(!user){
      return res.json({ erro: "Usuario nao existe !" });
    }

    const [tech] = await Tech.findOrCreate({
      where : { name },
    });

    await user.addTech(tech);

    return res.json(tech);

  },

  async index(req,res){
    const { user_id } = req.params;

    const user = await User.findByPk(user_id,{
      attributes : ['id','name'],
      include :{
        association:'techs',
        attributes: [ 'name'],
        through :{
          attributes: []
        }
      }
    });

    return res.json(user);
  }

}