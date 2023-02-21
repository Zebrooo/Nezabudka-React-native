const express = require('express');
const { Shop, Product } = require('../db/models');

const productRouter = express.Router();

// categoryid нужно подумать как в post добавить

productRouter
  .route('/')
  .get(async (req, res) => {
    try {
      const allProducts = await Product.findAll({
        where: { shopid: id },
      });
      return res.json(allProducts);
    } catch (err) {
      console.log(err);
      return res.sendStatus(500);
    }
  })
  .post(async (req, res) => {
    try {
      const { name, price, img, shopid } = req.body;
      const product = await Product.create({
        name,
        price,
        img,
        shopid,
      });
      res.json(product);
    } catch (err) {
      console.log(err);
    }
  });

module.exports = productRouter;
