const mogoose = require("mongoose")

const instructors = new mogoose.Schema({
    name: {
        type: String,
        required: true,
        min: 1,
        max: 100,
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    location: {
        type: String,
    },
}, {
    timestamps: true,
    versionKey : false,
})

const Instructors = mogoose.model("instructors", instructors)
module.exports = Instructors
