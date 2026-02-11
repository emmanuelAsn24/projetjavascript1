const mongoose = require("mongoose");
// const {Task,User} = require("./model")

const url = process.env.DB_URL;
const connectDb = async () => {
  try {
    await mongoose.connect(url, { serverSelectionTimeoutMS: 5000 });
    console.log("✅ Database connectée avec succès");
    console.log("Base de données utilisée: taskmanDB");
    return mongoose.connection;
  } catch (error) {
    console.error("❌ Erreur connexion MongoDB:", error.message);
    process.exit(1);
  }
};

module.exports = connectDb();
