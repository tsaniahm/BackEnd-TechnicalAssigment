const express =  require("express")
const router = express.Router()
const { body} = require('express-validator');

const {getCourses,postCourses, getCoursesById, updateCourses, deleteCourses} = require("../controllers/courses")

router.post(
    "/courses",
    body('title').notEmpty().isString().isLength({min: 1, max: 50}),
    body('description').notEmpty().isString().isLength({min: 1, max: 500}),
    body('instructor').notEmpty(),
    body('scheduleDateTime').notEmpty().isDate(),
     postCourses
)


router.patch(
    "/courses/:id",
    body('title').optional().isString().isLength({min: 1, max: 50}),
    body('description').optional().isString().isLength({min: 1, max: 500}),
    body('instructor').optional(),
    body('scheduleDateTime').optional().isDate(),
    updateCourses)

router.get("/courses", getCourses)
router.get("/courses/:id", getCoursesById)
router.delete("/courses/:id", deleteCourses)

module.exports = router;