var express = require("express");
var router = express.Router();

const cartModel = require("../models/cart.model");
// const CartService = require("../services/cart.service");

// 장바구니 정보 shopping_cart에 등록
router.post("/", async (req, res, next) => {
  try {
    // ticket={content_id, ticket_quantity, login_id}
    const ticket = req.body;
    const cart = await cartModel.insertTicket(ticket);
    res.json({ cart });
  } catch (err) {
    next(err);
  }
});

// 결제 완료
router.post("/tickets", async (req, res, next) => {
  try {
    const cart = req.body;
    const tickets = await cartModel.payDone(cart);
    res.json({ tickets });
  } catch (err) {
    next(err);
  }
});

// 장바구니 삭제
router.delete("/", async (req, res, next) => {
  try {
    const id = req.body.login_id;
    const cart = await cartModel.checkOutCancel(id);
    res.json({ cart });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
