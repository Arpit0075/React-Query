const express = require("express");
const mongo = require("./connection");
const cors = require("cors");
const port = process.env.PORT || 3001;
const app = express();
const authRouter = require("./Routes/auth");
const postsRouter = require("./Routes/posts");
require("dotenv").config();

app.use(cors());

async function loadapp() {
  try {
    mongo.connect();
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    app.get("/", (req, res) => {
      res.send("hello!");
    });

    //routes
    app.use("/auth", authRouter); //login/register
    app.use("/posts", postsRouter);

    // Error handling middleware
    app.use((err, req, res, next) => {
      // console.error(err.stack);
      res.status(500).send("Something broke!");
    });

    app.listen(port);
  } catch (err) {
    console.log(err);
  }
}
loadapp();
