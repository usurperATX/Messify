const mySqlPool = require('../config/db');

// CREATE SUGGESTION
const createSuggestion = async (req, res) => {
  try {
    const { suggestions, meal_type, feasability } = req.body;

    if (!suggestions || !meal_type || !feasability) {
      return res.status(400).json({
        success: false,
        message: "Please provide suggestions, meal_type, and feasability"
      });
    }

    const [result] = await mySqlPool.query(
      'INSERT INTO suggestions (suggestions, meal_type, feasability) VALUES (?, ?, ?)',
      [suggestions, meal_type, feasability]
    );

    res.status(201).json({
      success: true,
      message: "Suggestion added successfully",
      insertedId: result.insertId
    });
  } catch (error) {
    console.error("❌ Error in createSuggestion:", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

// GET ALL SUGGESTIONS
const getAllSuggestions = async (req, res) => {
  try {
    const [rows] = await mySqlPool.query(
      'SELECT sno, suggestions, meal_type, feasability FROM suggestions'
    );

    res.status(200).json({
      success: true,
      message: "All food suggestions",
      data: rows
    });
  } catch (error) {
    console.error("❌ Error in getAllSuggestions:", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

// GET ONE BY ID
const getSuggestionById = async (req, res) => {
  try {
    const id = req.params.id;

    const [rows] = await mySqlPool.query(
      'SELECT sno, suggestions, meal_type, feasability FROM suggestions WHERE sno = ?',
      [id]
    );

    if (rows.length === 0) {
      return res.status(404).json({ success: false, message: "No suggestion found" });
    }

    res.status(200).json({
      success: true,
      message: "Suggestion found",
      data: rows[0]
    });
  } catch (error) {
    console.error("❌ Error in getSuggestionById:", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = {
  createSuggestion,
  getAllSuggestions,
  getSuggestionById
};
