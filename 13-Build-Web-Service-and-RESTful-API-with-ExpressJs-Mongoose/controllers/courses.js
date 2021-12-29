const Courses = require('../models/courses')
const Instructors = require('../models/instructors')
const {validationResult} = require('express-validator')

exports.postCourses = async(req,res)=>{
    try {
            
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
        }

        const {title, description, instructor, scheduleDateTime} = req.body

        const instructorId = await Instructors.findOne({_id: instructor})

        const newData = Courses({
            title: title,
            description: description,
            instructor: instructorId._id,
            scheduleDateTime: scheduleDateTime
        })

        await newData.save()
        res.status(201).json({
            message : "Success add Courses",
            Laporan : newData
        })
    } catch (error) {
        res.status(500).json({message: error})
    }

}

exports.getCourses = async (req,res) =>{
    try {   
        const findCourses = await Courses.find()
        res.status(200).json({
            message : "Success Get courses",
            Laporan : findCourses
        })
    } catch (error) {
        res.status(500).json({message: error})
    }
}

exports.getCoursesById = async (req, res) =>{
    try {
        const id = req.params.id
    
        const findCourses = await Courses.findOne({_id: id})
        res.status(200).json({
            message : `Success Get Courses with id ${id}`,
            Laporan : findCourses
        })
    } catch (error) {
        res.status(500).json({message: error})
    }
}

exports.updateCourses = async (req, res) =>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
    
        const id = req.params.id
        const {title, description, instructor, scheduleDateTime} = req.body
    
        await Courses.updateOne(
            {_id: id},
            {
                title: title,
                description: description,
                instructor: instructor,
                scheduleDateTime: scheduleDateTime
            }
        )
        const findCourses = await Courses.findOne({_id: id})
        res.status(200).json({
            message : `Success Update Instructors with id ${id}`,
            Laporan : findCourses
        })
    } catch (error) {
        res.status(500).json({message: error})
    }
}

exports.deleteCourses = async (req, res) =>{
    try {
        const id = req.params.id
        await Courses.deleteOne({_id: id})
    
        res.status(200).json({
            message : `Courses with id ${id} removed`
        })
    } catch (error) {
        res.status(500).json({message: error})
    }
}