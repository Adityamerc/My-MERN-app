const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config(); //Mongo URI

const app = express();
const port = process.env.PORT || 5000;

//Express middlewares
app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

const Router_1 = require("./routes/route_1");

app.use("/addName", Router_1);

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
