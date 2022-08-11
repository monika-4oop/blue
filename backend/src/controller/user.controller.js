const { model } = require('mongoose')
const User= require('../model/user.model')

module.exports.getData = async (req, res, next) =>{
    try{
            let data=await User.find().lean().exec()
            res.send(data).status(200);

    } catch(err){
        res.send(err)
    }
}