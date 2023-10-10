import FavoriteListItem from "./FavoriteListItem";

function FavoriteList(props) {
  var favorArr = props.favorItems.map((item, index) => (
    <FavoriteListItem
      key={index}
      item={item}
      alertHandler={props.alertHandler}
    />
  ));

  return <div className="cart-list">{favorArr}</div>;
}

export default FavoriteList;
