const express = require('express');
const { CategoryShop } = require('../db/models');

const categoryShopRouter = express.Router();

categoryShopRouter
  .route('/')
  .get(async (req, res) => {
    try {
      const allCategoryShops = await CategoryShop.findAll({
        order: [['name', 'ASC']],
      });
      return res.json(allCategoryShops);
    } catch (err) {
      console.log(err);
      return res.sendStatus(500);
    }
  })
  .post(async (req, res) => {
    try {
      const { name } = req.body;
      await CategoryShop.create({
        name,
      });
      const sendCategoryShop = await CategoryShop.findOne({
        where: req.body,
      });
      res.json(sendCategoryShop);
    } catch (err) {
      console.log(err);
    }
  });

module.exports = categoryShopRouter;
