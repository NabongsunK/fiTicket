const ReviewListItem = function (props) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h6 className="card-subtitle mb-2 text-muted">{props.item.rating}</h6>
        <h5 className="card-title">{props.item.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          {props.item.event_start_date} ~ {props.item.event_end_date}
        </h6>
        <h6 className="card-subtitle mb-2 text-muted">{props.item.name}</h6>
        <h6 className="card-subtitle mb-2 text-muted">{props.item.content}</h6>
        <p className="card-text">{props.item.path}</p>
        <img src={props.item.first_imgae} />
      </div>
    </div>
  );
};
export default ReviewListItem;
