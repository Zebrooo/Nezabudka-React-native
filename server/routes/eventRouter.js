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
      console.log('====================================');
      console.log(req.session.user.id);
      console.log('====================================');
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
  eventRouter
  .route("/:id")
  .get(async (req, res) => {
    const oneEvent = await Event.findOne({
      where: { id: req.params.id },
      include: User,
    });
    res.json(oneEvent);
  })
  .delete(async (req, res) => {
    await Event.destroy({ where: { id: req.params.id } });
    res.sendStatus(200);
  })
  .patch(async (req, res) => {
    const event = await Event.findByPk(req.params.id);
    event.name = req.body.name;
    event.date = req.body.date;
    event.comment = req.body.comment;
    event.save();
    res.json(event);
  });


module.exports = eventRouter;
