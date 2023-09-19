var express = require("express");
var router = express.Router();

const cartModel = require("../models/cart.model");
const CartService = require("../services/cart.service");

// cart 등록
router.post("/", async (req, res, next) => {
  try {
    const item = req.body;
    const cart = await cartModel.create(item);
    res.json({ cart });
  } catch (err) {
    next(err);
  }
});

// cart 조회
router.get("/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const cart = await cartModel.findById(id);
    res.json(cart);
  } catch (err) {
    next(err);
  }
});

// 장바구니 정보 shopping_cart에 등록
router.post("/:id/tickets", async (req, res, next) => {
  try {
    const ticket = req.body;
    const cart = await CartService.addCart(ticket);
    res.json({ cart });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
