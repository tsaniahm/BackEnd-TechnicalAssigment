const Participants = require('../models/participants')
const {validationResult} = require('express-validator')

exports.postParticipants = async (req, res) =>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
    
        const {name, dateOfBirth, email, phone, courses} = req.body
    
        const newData = Participants({
            name: name,
            dateOfBirth: dateOfBirth,
            email: email,
            phone: phone,
            courses: courses,
        })
    
        await newData.save()
        res.status(201).json({ 
            message : "Success add participant",
            laporan : newData
        })
    } catch (error) {
        res.status(500).json({message: error})
    }
}

exports.getParticipants = async (req,res) =>{
    try {
        const findParticipants = await Participants.find()
        res.status(200).json({
            message : "Get Participants successfull",
            Laporan : findParticipants
        })
    } catch (error) {
        res.status(500).json({message: error})
    }
}

exports.getParticipantByID = async (req, res) =>{
    try {
        const id = req.params.id
        const findParticipant = await Participants.findOne({_id: id})
        res.status(200).json({
            message : `Get Participant with id ${id} successfull`,
            Laporan : findParticipant
        })
    } catch (error) {
        res.status(500).json({message: error})
    }
}

exports.updateParticipant = async (req, res) =>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
    
        const id = req.params.id
        const {name, dateOfBirth, email, phone, courses} = req.body
    
        await Participants.updateOne(
            {_id:id},
            {
                name: name,
                dateOfBirth: dateOfBirth,
                email: email,
                phone: phone,
                courses: courses,
            }
        )
    
        const findParticipants = await Participants.findOne({_id: id})
        res.status(200).json({
            message : `Update Participant with id ${id} successfull`,
            Laporan : findParticipants
        })
    } catch (error) {
        res.status(500).json({message: error})
    }
}

exports.deleteParticipant = async (req, res) =>{
    try {
        const id = req.params.id
        await Participants.deleteOne({_id:id})
    
        res.status(200).json({
            message : `Instructors with id ${id} removed`
        })
    } catch (error) {
        res.status(500).json({message: error})
    }
}