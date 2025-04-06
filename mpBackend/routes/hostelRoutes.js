const express = require('express');
const router = express.Router();
const { getHostels, getHostelBySno, createHostel } = require('../controllers/hostelController');

// GET all hostel entries
router.get('/getall', getHostels);

// GET hostel entry by SNO
router.get('/get/:sno', getHostelBySno);

// CREATE hostel entry
router.post('/create', createHostel);

module.exports = router;
