const TypeTable = function ({ item }) {
  const { type, code } = item;
  return (
    <div className="typetable">
      <tr>
        <td>{type}</td>
        <th>{code}</th>
      </tr>
    </div>
  );
};

export default TypeTable;
