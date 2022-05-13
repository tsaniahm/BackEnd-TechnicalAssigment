const mogoose = require("mongoose")

const users = new mogoose.Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
    versionKey : false,
})

const Users = mogoose.model("users", users)
module.exports = Users