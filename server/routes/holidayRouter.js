const express = require("express");
const { Holiday } = require("../db/models");

const holidayRouter = express.Router();

// categoryid нужно подумать как в post добавить

holidayRouter
  .route("/")
  .get(async (req, res) => {
    try {
      const allHolidays = await Holiday.findAll({order: [['date', 'ASC']],});
      return res.json(allHolidays);
    } catch (err) {
      console.log(err);
      return res.sendStatus(500);
    }
  })

module.exports = holidayRouter;