const express = require('express');
const router = express.Router();
const {
    createDuration,
    getAllDurations,
    getDurationBySno
} = require('../controllers/durationController');

// Create a new duration entry
router.post('/create', createDuration);

// Get all duration records
router.get('/getall', getAllDurations);

// Get a duration record by sno (primary key)
router.get('/get/:sno', getDurationBySno);

module.exports = router;
