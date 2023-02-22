const express = require('express');
const { Comment,  User } = require('../db/models');

const commentRouter = express.Router();

commentRouter
  .route('/shop/:id')
  .get(async (req, res) => {
    try {
      const allComments = await Comment.findAll({
         where: { shopid: req.params.id },
        include: [User],
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
      console.log('====================================');
      console.log(req.body, req.session.user);
      console.log('====================================');
      const { body, stars } = req.body;
     const comment = await Comment.create({
        body,
        stars,
        userid: req.session.user.id,
        shopid: req.params.id
      });
      console.log('====================================');
      console.log(comment);
      console.log('====================================');
      res.json(comment);
    } catch (err) {
      console.log(err);
    }
  });

module.exports = commentRouter;
