const mongoose = require("mongoose");

const dbConnect = async () => {
  const MONGODB_URI = process.env.DATABASE_URL;

  console.log("NODE_ENV:", process.env.NODE_ENV);
  console.log("Using Atlas:", MONGODB_URI?.includes("mongodb+srv"));

  try {
    await mongoose.connect(MONGODB_URI);
    console.log("✅ Connected to MongoDB Atlas");
    console.log("Database:", mongoose.connection.name);
  } catch (error) {
    console.error(error);
  }
};

module.exports = dbConnect;