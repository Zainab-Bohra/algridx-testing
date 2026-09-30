const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },

    category: {
      type: String,
      default: "HVAC",
      trim: true,
    },

    excerpt: {
      type: String,
      trim: true,
    },

    content: {
      type: String,
      required: true,
    },

    author: {
      type: String,
      default: "ALUGRIDX",
    },

    readTime: {
      type: String,
      default: "5 min read",
    },

    // 🚀 NEW SEO & SEARCH CONSOLE PARAMETERS
    metaTitle: {
      type: String,
      trim: true,
    },

    metaDescription: {
      type: String,
      trim: true,
    },

    focusKeyword: {
      type: String,
      trim: true,
    },

    tags: {
      type: [String],
      default: [],
    },

    canonicalUrl: {
      type: String,
      trim: true,
    },

    featuredImage: {
      type: String,
      default: "/images/products/linear-slot-diffusers.png",
    },
  },
  {
    timestamps: true,
  }
);

module.exports =
  mongoose.models.Blog ||
  mongoose.model("Blog", BlogSchema);