const express = require('express');

const port = 3000;

const app = express();

app.use(express.json())

const hewan = [
    {id: 1, nama: 'Snowy', spesies: 'kucing'},
    {id: 2, nama: 'Blacki', spesies: 'anjing'},
    {id: 3, nama: 'Molly', spesies: 'kucing'},
    {id: 4, nama: 'Milo', spesies: 'kelinci'},
    {id: 5, nama: 'Rere', spesies: 'kucing'},
  ]

//logger middleware
const logger = (req, res, next) => {
    console.log("this is logger")
    next()
}

//middleware for invalid species
const notValidSpecies = (req, res) => {
        res.status(404).send({
            error : "Species not valid",
        })
}

app.get("/", (req, res) =>{
    res.send("Home")
})


//get all hewan
app.get("/hewan", logger, (req, res, next) =>{
    try {
        res.send({
            message : "success get data pet",
            hewan : hewan
        })
        next()
    } catch (error) {
        res.status(500).send(error)
    }
})

//get hewan by id
app.get("/hewan/:id", logger, (req, res, next) =>{
    try {
        const filteredData = hewan.find((u) => u.id === Number(req.params.id))

        if(filteredData) {
            res.status(200).send({
                message : "success get data pet by id",
                hewanFilter : [filteredData]
            })
            
        }else{
            next() 
        } 
        
    } catch (error) {
        res.status(500).send(error)
    }
}, (req,res, next) =>{
    res.status(404).send({
        message : "data not found",
    })
})

//post hewan
app.post("/hewan", logger, (req, res, next) =>{
    try {
        const body = req.body

        const newData = {
            id : hewan.length + 1,
            nama : body['nama'],
            spesies : body['spesies']
        }

        if(newData.spesies === 'kucing' || newData.spesies === 'anjing' || newData.spesies === 'kelinci'){
            hewan.push(newData);
            res.status(201).send({
                message : "success adding data pet",
                hewan : hewan
            })
        }else next()

    } catch (error) {
        res.status(500).send(error)
    }
}, notValidSpecies)

//put or update hewan by id
app.put("/hewan/:id", logger, (req, res, next) =>{
    try {
        const body = req.body
        const index = hewan.findIndex((u) => u.id === +req.params.id)
        const updatedData = {id : +req.params.id, ...body}
        
        if(updatedData.spesies === 'kucing' || updatedData.spesies === 'anjing' || updatedData.spesies === 'kucing'){
            hewan[index] = updatedData
            res.status(201).send({
                message : "success updated",
                hewan : hewan
            })
        }else next()
    } catch (error) {
        res.status(500).send(error)
    }
}, notValidSpecies)


//delete hewan by id
app.delete("/hewan/:id", logger, (req,res) =>{
    try {
        const index = hewan.findIndex((u) => u.id === +req.params.id)
        const deletedData = hewan.splice(index,1);

        res.status(200).send({
            message : "success delete",
            deletedHewan : deletedData
        })
    } catch (error) {
        res.status(500).send(error)
    }
})

app.listen(port, ()=>{
    console.log(`listening at http://localhost:${port}`)
})