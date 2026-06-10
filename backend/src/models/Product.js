const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  code: { type: String  },
  category: { type: String, required: true },
  series: { type: String },
  images: [{ type: String }],
  shortDescription: { type: String, required: true },
  detailedDescription: { type: String },
  specifications: [{ key: String, value: String }],
  applications: [{ type: String }],
  performance: [{ key: String, value: String }],
  standardsCompliance: [{ type: String }],
  keyFeatures: [{ type: String }],
  controlOptions: [{ type: String }],
  faqs: [{ question: String, answer: String }],
  datasheetUrl: { type: String },
  seoTitle: { type: String },
  seoDescription: { type: String },
  isFeatured: { type: Boolean, default: false }
}, { timestamps: true });

module.exports = mongoose.model('Product', productSchema);