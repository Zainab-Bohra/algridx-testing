const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
    },

    category: {
      type: String,
      default: "HVAC",
    },

    excerpt: {
      type: String,
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
  },
  {
    timestamps: true,
  }
);

module.exports =
  mongoose.models.Blog ||
  mongoose.model("Blog", BlogSchema);