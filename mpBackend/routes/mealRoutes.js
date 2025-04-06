const express = require('express');
const router = express.Router();
const { getMeals, getMealBySno, createMeal } = require('../controllers/mealController');

router.get('/getall', getMeals);
router.get('/get/:sno', getMealBySno);
router.post('/create', createMeal);

module.exports = router;
