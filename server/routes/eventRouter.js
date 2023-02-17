const express = require('express');
const { Event, User, CategoryShop } = require('../db/models');

const eventRouter = express.Router();

eventRouter
  .route('/')
  .get(async (req, res) => {
    try {
      const allEvents = await Event.findAll({
        include: [User, CategoryShop],
        order: [['date', 'DESC']],
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
eventRouter.route('/:id').get(async (req, res) => {
  try {
    const oneEvent = await Event.findOne({
      where: { id: req.params.id },
      include: [User, CategoryShop],
    });
    return res.json(oneEvent);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
});

module.exports = eventRouter;
