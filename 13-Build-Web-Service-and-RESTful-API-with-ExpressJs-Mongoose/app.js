const express =  require("express")
const dotenv = require("dotenv")
dotenv.config()

const openDBConnection = require("./helpers/db")
const instructors = require("./routers/instructors")
const courses = require("./routers/courses")
const participants = require("./routers/participants")
const index = require("./routers/index")


const port = process.env.PORT || 3000
const uri = process.env.MONGO_URI

async function main(){
    try {
        await openDBConnection(uri)

        const app = express()
        app.use(express.json())
        app.use(express.urlencoded({ extended: true }));
        app.use(instructors)
        app.use(courses)
        app.use(participants)
        app.use(index)

        app.listen(port, ()=>{
            console.log(`listening at http://localhost:${port}`)
        })
    } catch (error) {
        console.log("main : ",error)
    }
}

main()