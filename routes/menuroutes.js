const express = require("express");
const router = express.Router();
const Menuitem = require("../Models/Menuitem");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newMenu = new Menuitem(data);
    const response = await newMenu.save();
    console.log("data saved");
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const data = await Menuitem.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
});

router.get("/:dish", async (req, res) => {
  try {
    const dish = req.params.dish;
    if (
      dish == "idli" ||
      dish == "chickenchilli" ||
      dish == "paneertikka"
    ) {
      const response = await Menuitem.find({ name: dish });
      console.log("response fetched");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "invalid dish name" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "internal server error" });
  }
});
module.exports = router;
