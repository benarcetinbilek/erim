const mongoose = require("mongoose");

const specsModel = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    height: { type: String, trim: true },
    weight: { type: String, trim: true },
    gender: { type: String, trim: true },
    neck: { type: String, trim: true },
    waist: { type: String, trim: true },
    hip: { type: String, trim: true },
  },

  { timestamps: true }
);

const Specs = mongoose.model("Specs", specsModel);

module.exports = Specs;
