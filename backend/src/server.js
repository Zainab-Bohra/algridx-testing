const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const multer = require("multer");

const dbConnect = require("../lib/dbConnect"); 
const Product = require("./models/Product"); 
const Blog = require("./models/Blog");
const blogRoutes = require("./routes/blogRoutes");

dotenv.config();
const app = express();

dbConnect();

app.use(express.json());

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);

app.use("/uploads", express.static(path.join(__dirname, "../uploads")));
app.use("/api/blogs", blogRoutes);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../uploads"));
  },
  filename: (req, file, cb) => {
    const safeName = file.originalname.replace(/\s+/g, "-");
    cb(null, Date.now() + "-" + safeName);
  },
});

const upload = multer({ storage: storage });

app.post("/api/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "Please select a file to upload" });
  }

  const imageUrl = `${process.env.BASE_URL}/uploads/${req.file.filename}`;

  res.status(200).json({ imageUrl });
});



app.post("/api/products", async (req, res) => {
  try {
    const {
  name,
  category,
  shortDescription,
  image,
  images,
  isAvailable,
} = req.body;


    const slug = name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

    const newProduct = new Product({
  name,
  slug,
  category,
  shortDescription,
  images: images?.length
    ? images
    : image
    ? [image]
    : [`${process.env.BASE_URL}/uploads/default.webp`],
  isAvailable:
    isAvailable !== undefined ? isAvailable : true,
});

    const savedProduct = await newProduct.save();

    res.status(201).json(savedProduct);
  } catch (error) {
    console.log("❌ MongoDB Save Error:", error);
    res.status(500).json({
      error: "Failed to add product to Database",
    });
  }
});

app.get("/api/products", async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
});

app.get("/api/products/:slug", async (req, res) => {
  try {
    const product = await Product.findOne({
      slug: req.params.slug,
    });

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
      });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch product",
    });
  }
});

app.put("/api/products/:id", async (req, res) => {
  try {
    if (req.body.name) {
      req.body.slug = req.body.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
    }
    
    if (req.body.series) {
      req.body.code = req.body.series;
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id, 
      { $set: req.body }, 
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (error) { 
    res.status(500).json({ error: "Failed to update product" }); 
  }
});


app.delete("/api/products/:id", async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Product deleted" });
  } catch (error) { res.status(500).json({ error: "Failed to delete product" }); }
});



app.post("/api/blogs", async (req, res) => {
  try {
    const {
      title,
      content,
      excerpt,
      category,
      author,
      readTime,
    } = req.body;

    const slug = title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

    const newBlog = new Blog({
      title,
      slug,
      content,
      excerpt,
      category,
      author,
      readTime,
    });

    const savedBlog = await newBlog.save();

    res.status(201).json(savedBlog);
  } catch (error) {
    console.log("❌ Blog Save Error:", error);

    res.status(500).json({
      error: "Failed to create blog",
    });
  }
});

app.get("/api/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (error) { res.status(500).json({ error: "Failed to fetch blogs" }); }
});
app.get("/api/blogs/:slug", async (req, res) => {
  try {
    const blog = await Blog.findOne({
      slug: req.params.slug,
    });

    if (!blog) {
      return res.status(404).json({
        message: "Blog not found",
      });
    }

    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({
      error: "Failed to fetch blog",
    });
  }
});
app.delete("/api/blogs/:id", async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Blog deleted" });
  } catch (error) { res.status(500).json({ error: "Failed to delete blog" }); }
});

app.post("/api/admin/login", (req, res) => {
  const { username, password } = req.body;

  if (
    username === process.env.ADMIN_USERNAME &&
    password === process.env.ADMIN_PASSWORD
  ) {
    return res.status(200).json({
      success: true,
      token: "admin-authenticated",
    });
  }

  return res.status(401).json({
    success: false,
    error: "Invalid username or password",
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 ALUGRIDX Backend Server running on port ${PORT}`);
});
