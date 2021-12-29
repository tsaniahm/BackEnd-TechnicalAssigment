const mogoose = require("mongoose")

const participants = new mogoose.Schema({
    name: {
        type: String,
        required: true,
        min: 1,
        max: 50,
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    email: {
        type: String,
        max:50,
    },
    phone: {
        type: String,
        max: 13,
    },
    courses: {
        type: Array,
        ref: 'Courses'
    }
}, {
    timestamps: true,
    versionKey : false,
})

const Participants = mogoose.model("participants", participants)
module.exports = Participants
