const mySqlPool = require('../config/db');

// GET all hostel entries
const getHostels = async (req, res) => {
    try {
        const [records] = await mySqlPool.query('SELECT * FROM hostel');
        if (!records.length) {
            return res.status(404).json({ success: false, message: "No hostel entries found" });
        }
        res.status(200).json({ success: true, message: "Hostel entries fetched", records });
    } catch (error) {
        console.error("❌ Error in getHostels:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

// GET hostel entry by sno
const getHostelBySno = async (req, res) => {
    try {
        const sno = req.params.sno;
        const [records] = await mySqlPool.query('SELECT * FROM hostel WHERE sno = ?', [sno]);
        if (!records.length) {
            return res.status(404).json({ success: false, message: "Hostel not found" });
        }
        res.status(200).json({ success: true, message: "Hostel found", data: records[0] });
    } catch (error) {
        console.error("❌ Error in getHostelBySno:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

// CREATE new hostel entry
const createHostel = async (req, res) => {
    try {
        const { block_type, block_name, report } = req.body;

        if (!block_type || !block_name || !report) {
            return res.status(400).json({ success: false, message: "All fields are required" });
        }

        // Safety check for block_name validity (logic enforced in DB but double check here too)
        const validBlocks = {
            'Ladies': ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
            'Mens': ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T']
        };

        if (!validBlocks[block_type]?.includes(block_name)) {
            return res.status(400).json({
                success: false,
                message: "Invalid block name for the given block type"
            });
        }

        const [result] = await mySqlPool.query(
            'INSERT INTO hostel (block_type, block_name, report) VALUES (?, ?, ?)',
            [block_type, block_name, report]
        );

        res.status(201).json({
            success: true,
            message: "Hostel entry created",
            insertId: result.insertId
        });

    } catch (error) {
        console.error("❌ Error in createHostel:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
};

module.exports = { getHostels, getHostelBySno, createHostel };
