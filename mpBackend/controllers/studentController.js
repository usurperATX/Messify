const mySqlPool = require('../config/db');

const getStudents = async (req, res) => {
    try {
        console.log("📢 /getall endpoint hit!");

        // Fetch all students
        const [records] = await mySqlPool.query('SELECT * FROM student');

        if (!records.length) {
            return res.status(404).json({ success: false, message: "No records found" });
        }

        res.status(200).json({ success: true, message: "All student records", records });
    } catch (error) {
        console.error("❌ Error in getStudents:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

// GET STUDENT BY ID
const getStudentByID = async (req, res) => {
    try {
        const studentId = req.params.regno;

        if (!studentId) {
            return res.status(400).json({
                success: false,
                message: 'Invalid or missing Registration Number'
            });
        }

        // 🧼 Clean destructuring like your getStudents method
        const [records] = await mySqlPool.query('SELECT * FROM student WHERE regno = ?', [studentId]);

        if (!records.length) {
            return res.status(404).json({
                success: false,
                message: 'No student found with that registration number'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Student record found',
            data: records[0] // Just send the single student object
        });

    } catch (error) {
        console.error('❌ Error in getStudentByID:', error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
    }
};

//CREATE STUDENT
// CREATE STUDENT
const createStudent = async (req, res) => {
    try {
        const { regno, name, report } = req.body;

        if (!regno || !name || !report) {
            return res.status(400).send({
                success: false,
                message: 'Please provide all fields'
            });
        }

        const [records] = await mySqlPool.query(
            'INSERT INTO student (regno, name, report) VALUES (?, ?, ?)', // ⚠️ fixed table name from "students" to "student" if consistent
            [regno, name, report]
        );

        res.status(201).send({
            success: true,
            message: 'New Student Record created',
            insertId: records.insertId // optional: show new record ID
        });

    } catch (error) {
        console.error('❌ Error in createStudent:', error);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
    }
};


module.exports = {getStudents,getStudentByID,createStudent};
