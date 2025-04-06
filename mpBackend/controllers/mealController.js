    const mySqlPool = require('../config/db');

    // GET all meal reports
    const getMeals = async (req, res) => {
        try {
            const [records] = await mySqlPool.query('SELECT * FROM meal');
            if (!records.length) {
                return res.status(404).json({ success: false, message: "No meal reports found" });
            }
            res.status(200).json({ success: true, message: "Meal reports fetched", records });
        } catch (error) {
            console.error("❌ Error in getMeals:", error);
            res.status(500).json({ success: false, message: "Internal Server Error" });
        }
    };

    // GET specific meal report
    const getMealBySno = async (req, res) => {
        try {
            const sno = req.params.sno;
            const [records] = await mySqlPool.query('SELECT * FROM meal WHERE sno = ?', [sno]);
            if (!records.length) {
                return res.status(404).json({ success: false, message: "Meal report not found" });
            }
            res.status(200).json({ success: true, message: "Meal report found", data: records[0] });
        } catch (error) {
            console.error("❌ Error in getMealBySno:", error);
            res.status(500).json({ success: false, message: "Internal Server Error" });
        }
    };

    // CREATE meal report
    const createMeal = async (req, res) => {
        try {
            const { meal_type, report } = req.body;

            if (!meal_type || !report) {
                return res.status(400).json({ success: false, message: "All fields are required" });
            }

            const validMeals = ['Breakfast', 'Lunch', 'Snacks', 'Dinner'];
            if (!validMeals.includes(meal_type)) {
                return res.status(400).json({ success: false, message: "Invalid meal type" });
            }

            const [result] = await mySqlPool.query(
                'INSERT INTO meal (meal_type, report) VALUES (?, ?)',
                [meal_type, report]
            );

            res.status(201).json({
                success: true,
                message: "Meal report created",
                insertId: result.insertId
            });

        } catch (error) {
            console.error("❌ Error in createMeal:", error);
            res.status(500).json({ success: false, message: "Internal Server Error" });
        }
    };

    module.exports = { getMeals, getMealBySno, createMeal };
