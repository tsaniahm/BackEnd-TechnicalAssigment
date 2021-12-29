const Instructors = require('../models/instructors')
const {validationResult} = require('express-validator')

exports.postInstructors = async (req,res, next) =>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
    
        const {name, dateOfBirth, location} = req.body
    
        const newData = Instructors({
            name: name,
            dateOfBirth: dateOfBirth,
            location: location,
        })
    
        await newData.save()
    
        res.status(201).json({ 
            message : "Berhasil Menambahkan Data Instructors",
            laporan : newData
        })
    } catch (error) {
        res.status(500).json({message : error})
    }
}

exports.getInstructots = async (req,res, next) =>{
    try {
        const findInstructors = await Instructors.find()
        res.status(200).json({
            message : "Get Instructors successfull",
            Laporan : findInstructors
        })
    } catch (error) {
        res.status(500).json({message : error})
    }
}

exports.getInstructorsById = async (req, res, next) =>{
    try {
        const id = req.params.id

        const findInstructors = await Instructors.findOne({_id: id})
        res.status(200).json({
            message : `Get Instructors with id ${id} successfull`,
            Laporan : findInstructors
        })
    } catch (error) {
        res.status(500).json({message : error})
    }
}

exports.updateInstructors = async (req, res, next) =>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
    
        const id = req.params.id
        const {name, dateOfBirth, location} = req.body
        
        await Instructors.updateOne(
            {_id: id},
            {
                name: name,
                dateOfBirth : dateOfBirth,
                location: location
            }
        )
        
        const findInstructors = await Instructors.findOne({_id: id})
        
        res.status(200).json({
            message : `Update Instructors with id ${id} successfull`,
            Laporan : findInstructors
        })
    } catch (error) {
        res.status(500).json({message : error})
    }

}

exports.deleteInstructors = async (req, res, next) =>{
    try {
        const id = req.params.id
        await Instructors.deleteOne({_id:id})
    
        res.status(200).json({
            message : `Instructors with id ${id} removed`
        })
    } catch (error) {
        res.status(500).json({message : error})
    }
}