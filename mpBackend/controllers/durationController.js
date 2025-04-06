const mySqlPool = require('../config/db');

// CREATE NEW DURATION ENTRY
const createDuration = async (req, res) => {
    try {
        const { from_date, to_date, report } = req.body;

        if (!from_date || !to_date || !report) {
            return res.status(400).json({
                success: false,
                message: "Please provide from_date, to_date, and report"
            });
        }

        const [result] = await mySqlPool.query(
            'INSERT INTO duration (from_date, to_date, report) VALUES (?, ?, ?)',
            [from_date, to_date, report]
        );

        res.status(201).json({
            success: true,
            message: "Duration report added successfully!",
            insertedSno: result.insertId // MySQL returns auto-increment value here
        });

    } catch (error) {
        console.error("❌ Error in createDuration:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

// GET ALL DURATION RECORDS
const getAllDurations = async (req, res) => {
    try {
        const [records] = await mySqlPool.query('SELECT * FROM duration');

        if (!records.length) {
            return res.status(404).json({
                success: false,
                message: "No duration records found"
            });
        }

        res.status(200).json({
            success: true,
            message: "All duration records",
            data: records
        });

    } catch (error) {
        console.error("❌ Error in getAllDurations:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

// GET DURATION RECORD BY sno (PK)
const getDurationBySno = async (req, res) => {
    try {
        const sno = req.params.sno;

        const [record] = await mySqlPool.query('SELECT * FROM duration WHERE sno = ?', [sno]);

        if (!record.length) {
            return res.status(404).json({
                success: false,
                message: "No duration record found for this sno"
            });
        }

        res.status(200).json({
            success: true,
            message: "Duration record found",
            data: record[0]
        });

    } catch (error) {
        console.error("❌ Error in getDurationBySno:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

module.exports = {
    createDuration,
    getAllDurations,
    getDurationBySno
};
    