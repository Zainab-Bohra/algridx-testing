const mongoose = require('mongoose');

const enquirySchema = new mongoose.Schema({
  name: { type: String, required: true },
  company: { type: String },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['New', 'Contacted', 'Quotation Sent', 'Closed'], 
    default: 'New' 
  }
}, { timestamps: true });

module.exports = mongoose.model('Enquiry', enquirySchema);