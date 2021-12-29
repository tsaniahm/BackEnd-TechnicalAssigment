const express =  require("express")
const router = express.Router()
const { body} = require('express-validator');

const {getInstructots,postInstructors,getInstructorsById, updateInstructors, deleteInstructors} = require("../controllers/instructors")

router.post(
    "/instructors",
    body('name').notEmpty().isString().isLength({min: 1, max: 100}),
    body('dateOfBirth').notEmpty().isDate(),
    body('location').optional().isString(),
     postInstructors
)

router.patch(
    "/instructors/:id",
    body('name').optional().isString().isLength({min: 1, max: 100}),
    body('dateOfBirth').optional().isDate(),
    body('location').optional().isString(),
    updateInstructors
)

router.get("/instructors", getInstructots)
router.get("/instructors/:id", getInstructorsById)
router.delete("/instructors/:id", deleteInstructors)

module.exports = router;

