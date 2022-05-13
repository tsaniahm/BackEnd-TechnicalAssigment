const express =  require("express")
const router = express.Router()
const { body} = require('express-validator');
const { authenticateJWT } = require("../controllers/authJwt");

const {getCourses,postCourses, getCoursesById, updateCourses, deleteCourses} = require("../controllers/courses")

router.post(
    "/courses",
    body('title').notEmpty().isString().isLength({min: 1, max: 50}),
    body('description').notEmpty().isString().isLength({min: 1, max: 500}),
    body('instructor').notEmpty(),
    body('scheduleDateTime').notEmpty().isDate(), 
    authenticateJWT,
     postCourses
)


router.patch(
    "/courses/:id", 
    body('title').optional().isString().isLength({min: 1, max: 50}),
    body('description').optional().isString().isLength({min: 1, max: 500}),
    body('instructor').optional(),
    body('scheduleDateTime').optional().isDate(),
    authenticateJWT,
    updateCourses)

router.get("/courses", authenticateJWT,  getCourses)
router.get("/courses/:id", authenticateJWT, getCoursesById)
router.delete("/courses/:id", authenticateJWT, deleteCourses)

module.exports = router;