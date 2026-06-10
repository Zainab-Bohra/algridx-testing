const express = require("express");

const {
  createBlog,
  getBlogs,
  getBlogBySlug,
  deleteBlog,
} = require("../controllers/blogController");

const router = express.Router();

router.get("/", getBlogs);
router.get("/:slug", getBlogBySlug);
router.post("/", createBlog);
router.delete("/:id", deleteBlog);

module.exports = router;