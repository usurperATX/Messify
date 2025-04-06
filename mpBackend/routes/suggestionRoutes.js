const express = require('express');
const router = express.Router();
const {
  createSuggestion,
  getAllSuggestions,
  getSuggestionById
} = require('../controllers/suggestionController');

// POST suggestion
router.post('/create', createSuggestion);

// GET all suggestions
router.get('/getall', getAllSuggestions);

// GET one suggestion by ID
router.get('/get/:id', getSuggestionById);

module.exports = router;
