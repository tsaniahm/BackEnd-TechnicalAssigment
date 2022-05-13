const express = require("express")
const jwt =  require("jsonwebtoken")
const bodyParser = require("body-parser")

const app = express()
const port = 3000;

app.use(bodyParser.json())

const accessTokenSecret = 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTYzOTQ3OTQ5MCwiaWF0IjoxNjM5NDc5NDkwfQ.rp9pddQfwajZOMH-rew4S7rwY-IpPUznn5bOP6v4Dak';

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

app.post("/login", (req,res) =>{

    const username = req.body.username
    const password = req.body.password

    const user = users.find(u => (u.username === username) &&(u.password === password) )
    console.log(username)
    console.log(password)

    if(user){
        const token = jwt.sign({username: user.username, role: user.role}, accessTokenSecret)
        res.json({
            token
        })
    }else{
        res.status(401).json("Username or password incorrect")
    }
})

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})