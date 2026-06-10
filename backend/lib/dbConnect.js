const mongoose = require("mongoose");

const dbConnect = async () => {
  // 🚀 वेरिएबल को फ़ंक्शन के अंदर पढ़ें, ताकि जब फ़ंक्शन कॉल हो तब वैल्यू चेक हो
  const MONGODB_URI = process.env.DATABASE_URL;

  if (!MONGODB_URI) {
    throw new Error("Please define the DATABASE_URL environment variable inside .env");
  }

  // अगर कनेक्शन पहले से खुला है, तो दोबारा कनेक्ट न करें
  if (mongoose.connection.readyState >= 1) {
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI);
    console.log("🚀 MongoDB Connected Successfully to Cluster0");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error);
    process.exit(1);
  }
};

module.exports = dbConnect;