const express = require("express");
const router = express.Router();
const Spec = require("../models/specsModel.js");

router.get("/getspec", async (req, res) => {});

router.post("/writespec", async (req, res) => {
  const newSpec = await Spec.create(req.body);
  res.json(newSpec);
});

module.exports = router;
