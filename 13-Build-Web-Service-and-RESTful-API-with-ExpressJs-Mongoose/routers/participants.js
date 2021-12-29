const express =  require("express")
const router = express.Router()
const { body} = require('express-validator');

const {getParticipants, postParticipants, getParticipantByID,updateParticipant,deleteParticipant} = require("../controllers/participants")

router.post(
    "/participants",
    body('name').notEmpty().isString().isLength({min:1, max:50}),
    body('dateOfBirth').notEmpty().isDate(),
    body('email').optional().isEmail().isLength({max: 50}),
    body('phone').optional().isString().isLength({max: 13}),
    postParticipants
)

router.patch(
    "/participants/:id",
    body('name').optional().isString().isLength({min:1, max:50}),
    body('dateOfBirth').optional().isDate(),
    body('email').optional().isEmail().isLength({max: 50}),
    body('phone').optional().isString().isLength({max: 13}),
    updateParticipant
)
router.get("/participants", getParticipants)
router.get("/participants/:id", getParticipantByID)
router.delete("/participants/:id", deleteParticipant)

module.exports = router;