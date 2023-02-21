const express = require('express');
const { Shop, Product } = require('../db/models');

const productRouter = express.Router();

// categoryid нужно подумать как в post добавить

productRouter.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const allProducts = await Product.findAll({
      where: { shopid: id },
    });
    return res.json(allProducts);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
});
productRouter.post('/', async (req, res) => {
  try {
    const { name, img, shopid, price } = req.body;
    const product = await Product.create({
      name,
      img,
      shopid,
      price,
    });

    res.json(product);
  } catch (err) {
    console.log(err);
  }
});

module.exports = productRouter;
