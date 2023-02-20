const express = require('express');
const { Shop, Product } = require('../db/models');

const productRouter = express.Router();

// categoryid нужно подумать как в post добавить

productRouter
  .route('/:id')
  .get(async (req, res) => {
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
  })
//   .post(async (req, res) => {
//     try {
//       const { name, http, geoteg } = req.body;
//       await Shop.create({
//         name,
//         http,
//         geoteg,
//         userid: req.session.user.id,
//       });
//       const sendShop = await Shop.findOne({
//         where: req.body,
//         include: [User, CategoryShop],
//       });
//       res.json(sendShop);
//     } catch (err) {
//       console.log(err);
//     }
//   });

module.exports = productRouter;
