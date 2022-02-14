const express = require("express");
const fetchUser = require("../middleware/fetchUser");
const Data = require("../models/Data");
const router = express.Router();


// Route 1 : Add a new Data using POST "/api/data/adddata". Login Required
router.post(
  "/adddata",
  fetchUser,
  async (req, res) => {
    try {
      const { bas,lta,hra,fa,inv,rent,cityType,med,appHra,taxInc } = req.body;

      const data = new Data({ bas,lta,hra,fa,inv,rent,cityType,med,appHra,taxInc,user: req.user.id,
      });
      const saveData = await data.save();

      res.json(saveData);
    } catch (error) {
      console.log(error);
      res.status(500).send("Some Error occured");
    }
  }
);


module.exports = router;
