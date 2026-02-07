const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
    complaintId: { type: String, required: true },
    citizenId: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    originalLanguage: { type: String, required: true },
    translatedText: { type: String, required: true },
    district: { type: String, required: true },
    localBody: { type: String, required: true },
    ward: { type: String, required: true },
    latitude: { type: Number, required: true },
    longitude: { type: Number, required: true },
    predictedCategory: { type: String, required: true },
    categoryConfidence: { type: Number, required: true },
    sentiment: { type: String, required: true },
    urgencyLevel: { type: String, required: true },
    status: { type: String, required: true },
    assignedTo: { type: String, required: true },
    assignedDepartment: { type: String, required: true },
    slaDeadline: { type: Date, required: true },
    slaBreached: { type: Boolean, required: true },
    resolution: { type: String },
    comments: { type: [String] },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now, index: true }
});

const Complaint = mongoose.model('Complaint', complaintSchema);

module.exports = Complaint;