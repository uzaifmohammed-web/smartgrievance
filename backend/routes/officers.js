const express = require('express');
const router = express.Router();

// Mock data for demonstration purposes
const officers = [
  { id: 1, name: 'Officer A', department: 'HR', district: 'District 1' },
  { id: 2, name: 'Officer B', department: 'Finance', district: 'District 2' },
  // ...more officers
];

// GET / - Retrieve officers with optional filters
router.get('/', (req, res) => {
    const { department, district } = req.query;
    let filteredOfficers = officers;

    if (department) {
        filteredOfficers = filteredOfficers.filter(officer => officer.department === department);
    }
    if (district) {
        filteredOfficers = filteredOfficers.filter(officer => officer.district === district);
    }

    res.json(filteredOfficers);
});

// POST /:officerId/assign - Assign an officer
router.post('/:officerId/assign', (req, res) => {
    const { officerId } = req.params;
    const { assignedTo } = req.body;

    // Perform assignment logic here
    const officer = officers.find(o => o.id === parseInt(officerId));
    if (!officer) {
        return res.status(404).json({ message: 'Officer not found' });
    }

    // Assuming assignment is successful
    res.status(200).json({ message: `Officer ${officer.name} assigned to ${assignedTo}` });
});

module.exports = router;