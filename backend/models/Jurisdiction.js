const mongoose = require('mongoose');

const jurisdictionSchema = new mongoose.Schema({
    state: { type: String, required: true },
    district: { type: String, required: true },
    localBody: { type: String, required: true },
    localBodyType: { type: String, required: true },
    ward: { type: String, required: true },
    departments: [
        {
            name: { type: String, required: true },
            code: { type: String, required: true },
            slaHours: { type: Number, required: true }
        }
    ],
    officers: [
        {
            userId: { type: mongoose.Schema.Types.ObjectId, required: true },
            name: { type: String, required: true },
            role: { type: String, required: true },
            department: { type: String, required: true },
            capacity: { type: Number, required: true },
            currentLoad: { type: Number, required: true }
        }
    ]
}, { timestamps: true });

module.exports = mongoose.model('Jurisdiction', jurisdictionSchema);