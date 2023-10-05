const CodeTable = function ({ list }) {
  const { id, localTitle, area_code } = list;
  return (
    <div className="codetable">
      <tr>
        <td>{localTitle}</td>
        <th>{area_code}</th>
      </tr>
    </div>
  );
};

export default CodeTable;
