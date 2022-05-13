const jwt = require('jsonwebtoken');
const Users = require('../models/users');
require('dotenv').config();

const users = [
    {
        username: 'terra',
        password: 'password123admin',
        role: 'admin'
    }, {
        username: 'dave',
        password: 'password123member',
        role: 'member'
    }
  ];

exports.postSignUp = async(req, res) =>{
    try {
    
        const {username, password} = req.body
        console.log(req.body)
    
        const newData = Users({
            username: username,
            password: password,
        })
    
        await newData.save()
        res.status(201).json({ 
            message : "Success add participant",
            result : newData
        })
    } catch (error) {
        res.status(500).json({message: error})
    }
}
  
exports.postLogin = async(req,res)=>{

    const username = req.body.username
    const password = req.body.password

    const user = await Users.findOne({ username: username, password: password })
    
    if(user){
        const token = jwt.sign({username: user.username, password: user.password}, process.env.SECRET_KEY)
        res.json({
            token
        })
    }else{
        res.status(401).json("Username or password incorrect")
    }
}