require("dotenv").config();

exports.connect = async () => {
  try {
    let localUrl = "mongodb://localhost:27017/postsApp";
    const mongoose = require("mongoose");
    mongoose.set("strictQuery", false);
    mongoose.connect(
      //process.env.MONGODB_URL,
      localUrl,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
  } catch (err) {
    console.log(err);
    process.exit();
  }
};
