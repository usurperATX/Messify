const express = require('express');
const router = express.Router();
const { getStudents, createStudent, getStudentByID } = require('../controllers/studentController');

//routes

//GET ALL STUDENTS LIST || GET
router.get('/getall', getStudents);

//GET ALL STUDENTS BY ID
router.get('/get/:regno',getStudentByID);

//CREATE STUDENT
router.post('/create',createStudent);


module.exports = router;
