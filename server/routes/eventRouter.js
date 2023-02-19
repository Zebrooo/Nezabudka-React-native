const express = require("express");
const { Event, User } = require("../db/models");

const eventRouter = express.Router();

eventRouter
  .route("/")
  .get(async (req, res) => {
    try {
      const allEvents = await Event.findAll({
        include: [User],
        order: [["date", "DESC"]],
      });
      return res.json(allEvents);
    } catch (err) {
      console.log(err);
      return res.sendStatus(500);
    }
  })
  .post(async (req, res) => {
    try {
      const { name, date, comment } = req.body;
      await Event.create({
        name,
        date,
        comment,
        userid: req.session.user.id,
      });
      const sendEvent = await Event.findOne({
        where: req.body,
        include: User,
      });
      res.json(sendEvent);
    } catch (err) {
      console.log(err);
    }
  });

module.exports = eventRouter;
