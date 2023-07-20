/* eslint-disable react/prop-types */
import CellComponent from "../CellComponent/CellComponent";

const RowComponent = ({ row, rowIdx }) => {
  return (
    <div className={["row", `rowIdx_${rowIdx}`].join(" ")}>
      {row.map((cell, colIdx) => (
        <CellComponent cell={cell} key={colIdx} colIdx={colIdx} />
      ))}
    </div>
  );
};

export default RowComponent;
