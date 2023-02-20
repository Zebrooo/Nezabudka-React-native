const express = require("express");
const { Shop, User, CategoryShop, Comment, Product } = require("../db/models");

const shopRouter = express.Router();

// categoryid нужно подумать как в post добавить

shopRouter
  .route("/")
  .get(async (req, res) => {
    try {
      const allShops = await Shop.findAll({
        include: [User, CategoryShop, Comment]
      });
      return res.json(allShops);
    } catch (err) {
      console.log(err);
      return res.sendStatus(500);
    }
  })
  .post(async (req, res) => {
    try {
      const { name, http, geoteg, categoryid, img } = req.body;
      await Shop.create({
        name,
        http,
        geoteg,
        categoryid,
        img,
        userid: req.session.user.id,
      });
      const sendShop = await Shop.findOne({
        where: req.body,
        include: [User, CategoryShop],
      });
      res.json(sendShop);
    } catch (err) {
      console.log(err);
    }
  });

module.exports = shopRouter;
