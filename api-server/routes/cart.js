var express = require("express");
var router = express.Router();

const cartModel = require("../models/cart.model");
const CartService = require("../services/cart.service");

// 장바구니 정보 shopping_cart에 등록
router.post("/", async (req, res, next) => {
  try {
    // req.body = {[tickets], login_id, paid_amount}
    // tickets={content_id, ticket_quantity}
    const paid_id = await CartService.doPay(req.body);
    res.json({ ok: true, paid_id });
  } catch (err) {
    next(err);
  }
});

// 결제 완료
router.post("/check", async (req, res, next) => {
  // req.body = { paid_amount, login_id, paid.id };
  try {
    const cart = req.body;
    await CartService.donePay(cart);
    res.json({ ok: true });
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
