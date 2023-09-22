import UserListItem from "./UserListItem";

function UserList(props) {
  var userArr = props.userItems.map((item) => (
    <UserListItem key={item.id} item={item} handleToggle={props.handleToggle} />
  ));

  return <div className="cart-list">{userArr}</div>;
}

export default UserList;
