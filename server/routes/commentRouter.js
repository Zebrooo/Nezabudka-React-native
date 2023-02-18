const express = require('express');
const { Comment, Shop, User } = require('../db/models');

const commentRouter = express.Router();

commentRouter
  .route('/shop/:id')
  .get(async (req, res) => {
    try {
      const allComments = await Comment.findAll({
         where: { shopid: req.params.id },
        include: [User, Shop],
        order: [['date', 'DESC']],
      });
      return res.json(allComments);
    } catch (err) {
      console.log(err);
      return res.sendStatus(500);
    }
  })
  .post(async (req, res) => {
    try {
      const { body, stars } = req.body;
      await Comment.create({
        body,
        stars,
        userid: req.session.user.id,
        shopid: req.params.id
      });
      const sendComment = await Comment.findOne({
        where: req.body,
        include: [User, Shop],
      });
      res.json(sendComment);
    } catch (err) {
      console.log(err);
    }
  });

module.exports = commentRouter;
