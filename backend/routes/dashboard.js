'use strict';

const express = require('express');
const router = express.Router();
const { Complaint } = require('../models/Complaint'); // Assuming the model is in models/Complaint.js

/**
 * @route GET /stats
 * @description Get statistics about complaints
 * @access Public
 */
router.get('/stats', async (req, res) => {
    try {
        const totalComplaints = await Complaint.countDocuments();

        const pendingComplaints = await Complaint.countDocuments({ status: 'pending' });

        const resolvedComplaints = await Complaint.countDocuments({ status: 'resolved' });

        const breachedSLA = await Complaint.countDocuments({ slaBreach: true });

        const categoryBreakdown = await Complaint.aggregate([
            { $group: { _id: '$category', count: { $sum: 1 } } }
        ]);

        const statusBreakdown = await Complaint.aggregate([
            { $group: { _id: '$status', count: { $sum: 1 } } }
        ]);

        res.json({
            totalComplaints,
            pendingComplaints,
            resolvedComplaints,
            breachedSLA,
            categoryBreakdown,
            statusBreakdown
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;