const express = require("express")
const jwt =  require("jsonwebtoken")
const bodyParser = require("body-parser")

const app = express()
const port = 4000;

const accessTokenSecret = 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTYzOTQ3OTQ5MCwiaWF0IjoxNjM5NDc5NDkwfQ.rp9pddQfwajZOMH-rew4S7rwY-IpPUznn5bOP6v4Dak';

// Middleware for veryfying token that client have when login in port 3000 (auth.js)
const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, accessTokenSecret, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

app.use(bodyParser.json())

//data books
const books = [
    {
      "author": "Robert Martin",
      "country": "USA",
      "language": "English",
      "pages": 209,
      "title": "Clean Code",
      "year": 2008
    },
    {
      "author": "Dave Thomas & Andy Hunt",
      "country": "USA",
      "language": "English",
      "pages": 784,
      "title": "The Pragmatic Programmer",
      "year": 1999
    },
    {
      "author": "Kathy Sierra, Bert Bates",
      "country": "USA",
      "language": "English",
      "pages": 928,
      "title": "Head First Java",
      "year": 2003
    },
    ];

//get books but must be logged in port 3000 (auth.js)
app.get("/books", authenticateJWT,  (req,res) =>{
    res.json(books)
})

//post book for admin only and must be logged in port 3000 (auth.js)
app.post("/books",  authenticateJWT,  (req,res) =>{

    const body = req.body

    const newData = {
        author: body['author'],
        country: body['country'],
        language: body['language'],
        pages: body['pages'],
        title: body['title'],
        year: body['year']
    }
    
    //check role based on req.user.role
    if(req.user.role === "admin"){
        books.push(newData)
        res.json("Book Added Successfully")
    }else{
        res.json("you are not an admin")
    }
})

app.listen(port, () => {
    console.log(`listening at http://localhost:${port}`)
})