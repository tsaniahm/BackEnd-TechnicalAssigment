const express = require('express');
const session = require("express-session")
const cookieParser = require('cookie-parser')
const path = require("path")

const port = 3000

const app = express();

const myusername = "user1";
const mypassword = "mypassword";

var Session = {
    secret: "XAzKW76WMKJJrKPvaOz1", 
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 60 * 1000
    }
}

app.use(express.static('views'))
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(session(Session))

app.post("/users", (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
    
        if (username === myusername && password === mypassword) {
            req.session.username = username;
            res.sendFile(path.join(__dirname, 'views/userPage.html'));
        }else{
            const message = `<h1 style="text-align: center">Unauthenticated User</h1>`;
            res.send(message)
        }
    } catch (error) {
        res.status(500).send(error)
    }
})

app.get("/users", (req, res) => {
  try {
    const username = req.session.username;

    if (username === myusername) {
        res.sendFile(path.join(__dirname, 'views/userPage.html'));
    }else{
        const message = `<h1 style="text-align: center">Can't Access Page</h1>`;
        res.send(message)
    }
  } catch (error) {
    res.status(500).send(error)
  }
})

app.get("/logout", (req, res) => {
    try {
        req.session.destroy();
        const message = `<h1 style="text-align: center">Success Logout</h1>`;
        res.send(message)
    } catch (error) {
        res.status(500).send(error)
    }
})

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})