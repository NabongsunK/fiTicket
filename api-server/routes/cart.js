var express = require("express");
var router = express.Router();

const CartService = require("../services/cart.service");
const cartModel = require("../models/cart.model");

// TODO: login_id -> user_id로 변경

// 장바구니 정보 shopping_cart에 등록
router.post("/", async (req, res, next) => {
  try {
    // req.body = {[tickets], user_id, paid_amount}
    // tickets={ticket_id, ticket_quantity}
    const paid_id = await CartService.doPay(req.body);
    res.json({ ok: true, paid_id });
  } catch (err) {
    next(err);
  }
});

// 결제 완료
router.post("/check", async (req, res, next) => {
  // req.body = { paid_amount, user_id, paid_id };
  try {
    const cart = req.body;
    const ret = await CartService.donePay(cart);
    res.json(ret);
  } catch (err) {
    next(err);
  }
});

// 결제 실패
router.post("/checkfail", async (req, res, next) => {
  // req.body = { paid_amount, login_id, paid_id };
  try {
    const cart = req.body;
    const ret = await CartService.dontPay(cart);
    res.json(ret);
  } catch (err) {
    next(err);
  }
});

// cart_done == 1 & cart_deleted ==0인 리스트 user_id로 찾기
router.get("/tickethistory/:id", async (req, res, next) => {
  try {
    const id = Number(req.params.id);
    const article = await cartModel.history(id);
    res.json(article);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
