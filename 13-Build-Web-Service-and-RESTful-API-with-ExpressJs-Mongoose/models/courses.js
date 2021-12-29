const mogoose = require("mongoose")

const courses = new mogoose.Schema({
    title: {
        type: String,
        required: true,
        min: 1,
        max: 50,
    },
    description: {
        type: String,
        required: true,
        min: 1,
        max: 500,
    },
    instructor: {
        type: String,
        required: true,
        ref: 'Instructors',
    },
    scheduleDateTime: {
        type: Date,
        required: true,
        
    }
}, {
    timestamps: true,
    versionKey : false,
})

const Courses = mogoose.model("courses", courses)
module.exports = Courses
