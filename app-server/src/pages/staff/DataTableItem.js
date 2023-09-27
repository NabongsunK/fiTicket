const DataTableItem = function (props) {
  const {
    id,
    rec,
    d_day,
    area_code,
    title,
    addr1,
    first_image,
    event_start_date,
    event_end_date,
    over_view,
    tel,
  } = props.festival;
  // console.log(props.festival);
  return (
    <>
      <tr role="row" className="odd">
        <td className="sorting_1">{id}</td>
        <td>{rec}</td>
        <td>{d_day}</td>
        <td>{area_code}</td>
        <td>{title}</td>
        <td>{addr1.substring(0, 8)}</td>
        <td>{first_image.substring(0, 16)}</td>
        <td>{event_start_date}</td>
        <td>{event_end_date}</td>
        <td>{over_view.slice(0, 16)}</td>
        <td>{tel}</td>
      </tr>
    </>
  );
};

export default DataTableItem;
