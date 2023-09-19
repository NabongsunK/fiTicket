function CartSummary({
  calculateTotalAmount,
  calculateTotalQuantity,
  calculateTotalDiscount,
}) {
  return (
    <div className="cart-amount-summary">
      <h2>쇼핑 내역</h2>
      <ul className="summary-table">
        <li>
          <span>티켓 가격:</span>
          <span>{calculateTotalAmount().toLocaleString()}원</span>
        </li>
        <li>
          <span>티켓 총수량:</span>
          <span>{calculateTotalQuantity()}장</span>
        </li>
        <li>
          {/* Uncomment when needed
          <span>총할인:</span>
          <span>
            -{(calculateTotalDiscount() / calculateTotalAmount() * 100).toFixed(2)}%
          </span>
          */}
        </li>
        <li>
          <span>결제금액:</span>
          <span>
            {(
              calculateTotalAmount() - calculateTotalDiscount()
            ).toLocaleString()}
            원
          </span>
        </li>
      </ul>
    </div>
  );
}

export default CartSummary;
