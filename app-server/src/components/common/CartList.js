import CartListItem from "./CartListItem";

function CartList(props) {
  var cartArr = props.cartItems.map((item, index) => (
    <CartListItem key={index} item={item} />
  ));

  return <div className="cart-list">{cartArr}</div>;
}

export default CartList;
