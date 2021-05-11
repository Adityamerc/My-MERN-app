//database schema for mongodb
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const DBSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const makeModel = mongoose.model("logAuth", DBSchema);

module.exports = makeModel;
