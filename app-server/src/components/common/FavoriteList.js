import FavoriteListItem from "./CartListItem";

function FavoriteList(props) {
  var cartArr = props.cartItems.map((item, index) => (
    <FavoriteListItem key={index} item={item} />
  ));

  return <div className="cart-list">{cartArr}</div>;
}

export default FavoriteList;
