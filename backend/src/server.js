const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");
const multer = require("multer");
const nodemailer = require("nodemailer");
const fs = require("fs"); 

const dbConnect = require("../lib/dbConnect"); 
const Product = require("./models/Product"); 
const Blog = require("./models/Blog");
const blogRoutes = require("./routes/blogRoutes");

dotenv.config();
const app = express();

// Establish Database connection
dbConnect();

// 1. Parse JSON Payloads (Always keep on top)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2. Strict Cross-Origin Resource Sharing Rules (Relaxed for localhost debugging)
app.use(
  cors({
    origin: ["http://localhost:3000", "http://127.0.0.1:3000"], 
    credentials: true,
  })
);

// =========================================================================
// ⚡ OPTIMIZATION: ZERO-LOADING PATH CONFIGURATION
// =========================================================================
// Rasta point-out kiya gaya hai frontend ke public folder ke andar bane uploads folder par
const uploadsDir = path.join(__dirname, "../../../frontend/public/uploads"); 

// Ensure Uploads Directory Exists to prevent crash
if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}
app.use("/uploads", express.static(uploadsDir));

// Register Blog External Routes
app.use("/api/blogs", blogRoutes);

// Multer Storage Configuration Framework (Auto renaming files based on clean slug)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadsDir);
  },
  filename: (req, file, cb) => {
    // Agar body me product name hai, toh filename ko clean slug format mil jayega
    const baseSlug = req.body.name
      ? req.body.name.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "")
      : "component-" + Date.now();
    
    cb(null, `${baseSlug}${path.extname(file.originalname)}`);
  },
});

const upload = multer({ storage: storage });

// Multi-part Form Upload Endpoint Node
app.post("/api/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "Please select a file to upload" });
  }

  // Frontend standard path response injection
  const imageUrl = `/uploads/${req.file.filename}`;
  res.status(200).json({ imageUrl });
});

// =========================================================================
// 🎯 INLINE CONTACT RFQ EMAIL TRANSMISSION NODE (Fully Secure)
// =========================================================================
app.post("/api/contact", async (req, res) => {
  try {
    const { name, email, phone, company, msg } = req.body;

    if (!name || !email || !phone || !msg) {
      return res.status(400).json({ success: false, error: "Required fields are missing." });
    }

    if (!process.env.EMAIL_HOST || !process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.log("⚠️ Missing SMTP environment variables inside backend/.env");
      return res.status(500).json({ success: false, error: "Server SMTP Configuration Missing." });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: parseInt(process.env.EMAIL_PORT || "587"),
      secure: process.env.EMAIL_SECURE === "true", 
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: "info@alugridx.com", 
      subject: `New Technical Submittal RFQ from ${company || name}`,
      html: `
        <div style="font-family: sans-serif; padding: 24px; color: #124170; max-width: 600px; border: 1px solid #f1f5f9; border-radius: 24px; background: #ffffff;">
          <h2 style="color: #124170; border-bottom: 2px solid #3B82F6; padding-bottom: 12px; font-size: 20px; font-weight: 900; text-transform: uppercase; tracking: tight;">Technical Submittal Request</h2>
          <p style="margin: 12px 0; font-size: 14px;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 12px 0; font-size: 14px;"><strong>Email:</strong> ${email}</p>
          <p style="margin: 12px 0; font-size: 14px;"><strong>Phone:</strong> ${phone}</p>
          <p style="margin: 12px 0; font-size: 14px;"><strong>Company:</strong> ${company || "Not Provided"}</p>
          <hr style="border: 0; border-top: 1px solid #f1f5f9; margin: 20px 0;" />
          <p style="font-size: 12px; font-weight: 800; color: #3B82F6; text-transform: uppercase;">Project Scope / RFQ Requirements:</p>
          <p style="white-space: pre-line; background: #f8fafc; padding: 16px; border-radius: 16px; color: #334155; font-size: 13px; line-height: 1.6; border: 1px solid #f1f5f9;">${msg}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true, message: "Email sent successfully!" });

  } catch (error) {
    console.error("❌ Email Transmission Error:", error);
    return res.status(500).json({ success: false, error: "Failed to forward request to inbox." });
  }
});

// =========================================================================
// PRODUCTS MANAGEMENT REGISTRY API STACK (AUTO GENERATES STATIC OPTIMIZED PATHS)
// =========================================================================
app.post("/api/products", upload.single("image"), async (req, res) => {
  try {
    const { name, category, shortDescription, isAvailable, series, specifications, keyFeatures } = req.body;

    const slug = name
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");

    // Path Logic: Pehle check karega multer file aayi hai ya nahi, nahi toh template predict laga dega
    let savedImagePath = `/uploads/${slug}.avif`;
    if (req.file) {
      savedImagePath = `/uploads/${req.file.filename}`;
    }

    const newProduct = new Product({
      name,
      slug,
      category,
      code: series || req.body.code,
      shortDescription,
      images: [savedImagePath], // Auto optimized clean relative string mapping
      isAvailable: isAvailable !== undefined ? isAvailable : true,
      specifications: specifications ? JSON.parse(specifications) : [],
      keyFeatures: keyFeatures ? JSON.parse(keyFeatures) : []
    });

    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    console.log("❌ MongoDB Save Error:", error);
    res.status(500).json({ error: "Failed to add product to Database" });
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
    const product = await Product.findOne({ slug: req.params.slug });
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch product" });
  }
});

app.put("/api/products/:id", upload.single("image"), async (req, res) => {
  try {
    if (req.body.name) {
      req.body.slug = req.body.name
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)+/g, "");
    }
    
    if (req.body.series) {
      req.body.code = req.body.series;
    }

    // Update case me agar nayi file bhej rahe ho toh images array automatically restructure hoga
    if (req.file) {
      req.body.images = [`/uploads/${req.file.filename}`];
    } else if (req.body.name) {
      // Agar sirf name change ho raha hai bina nayi image ke, toh image fallback name setup trigger hoga
      req.body.images = [`/uploads/${req.body.slug}.avif`];
    }

    // Specifications updates handle parsing corrections
    if (req.body.specifications && typeof req.body.specifications === "string") {
      req.body.specifications = JSON.parse(req.body.specifications);
    }
    if (req.body.keyFeatures && typeof req.body.keyFeatures === "string") {
      req.body.keyFeatures = JSON.parse(req.body.keyFeatures);
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
  } catch (error) { 
    res.status(500).json({ error: "Failed to delete product" }); 
  }
});

// =========================================================================
// ARTICLES PRESS LOGS ARCHIVE ENDPOINTS
// =========================================================================
app.post("/api/blogs", async (req, res) => {
  try {
    const { title, content, excerpt, category, author, readTime } = req.body;

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
    res.status(500).json({ error: "Failed to create blog" });
  }
});

app.get("/api/blogs", async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.status(200).json(blogs);
  } catch (error) { 
    res.status(500).json({ error: "Failed to fetch blogs" }); 
  }
});

app.get("/api/blogs/:slug", async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch blog" });
  }
});

app.delete("/api/blogs/:id", async (req, res) => {
  try {
    await Blog.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Blog deleted" });
  } catch (error) { 
    res.status(500).json({ error: "Failed to delete blog" }); 
  }
});

// =========================================================================
// SECURITY ACCESS CONTROL STACK
// =========================================================================
app.post("/api/admin/login", (req, res) => {
  const { username, password } = req.body;

  if (username === process.env.ADMIN_USER && password === process.env.ADMIN_PASS) {
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

// Global Error Shield: Always forces JSON formatting for any runtime syntax drops
app.use((err, req, res, next) => {
  console.error("Global Error Shield Exception:", err.stack);
  res.status(500).json({ success: false, error: err.message || "Internal Server Error" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 ALUGRIDX Backend Server running on port ${PORT}`);
});