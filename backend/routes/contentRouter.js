const express = require("express");
const router = express.Router();
const Content = require("../models/contentModal");

// get all component data

router.get("/", async (req, res) => {
  try {
    const allContents = await Content.find();
    res.status(200).json({
      message: "All contents Fetched Successfully",
      data: allContents,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get a component by id
router.get("/:id", async (req, res) => {
  try {
    const content = await Content.findById(req.params.id);
    res.status(200).json({
      message: "Content Fetched Successfully",
      data: content,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// add a Content
router.post("/", async (req, res) => {
  try {
    const content = new Content(req.body);
    await content.save();
    res.status(201).json({ message: "Content Added Successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// update a content
router.put("/:id", async (req, res) => {
  try {
    await Content.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({ message: "Content Updated Successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// delete a content
router.delete("/:id", async (req, res) => {
  try {
    await Content.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Content Deleted Successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
