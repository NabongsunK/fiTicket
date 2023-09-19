import { Link } from "react-router-dom";

function CartList({
  cartItems,
  handleRemoveItem,
  handleIncreaseQuantity,
  handleDecreaseQuantity,
}) {
  return (
    <div className="cart-list">
      {cartItems.map((item) => (
        <div className="single-cart-item" key={item.id}>
          <Link to="#" className="product-image">
            <img src={item.image} className="cart-thumb" alt={item.name} />
            <div className="cart-item-desc">
              <span className="product-remove">
                <i
                  className="fa fa-close"
                  aria-hidden="true"
                  onClick={() => handleRemoveItem(item.id)}
                ></i>
              </span>
              <span className="badge">{item.badge}</span>
              <h6>{item.name}</h6>
              <p className="size">
                수량:{" "}
                <button onClick={() => handleDecreaseQuantity(item.id)}>
                  -
                </button>
                {item.quantity}
                <button onClick={() => handleIncreaseQuantity(item.id)}>
                  +
                </button>
              </p>
              <p className="color">할인: {item.discount}%</p>
              <p className="price">{item.price.toLocaleString()}원</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default CartList;
