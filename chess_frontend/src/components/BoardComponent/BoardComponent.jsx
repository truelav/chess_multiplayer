/* eslint-disable react/prop-types */
import RowComponent from "../RowComponent/RowComponents";

const BoardComponent = ({ board }) => {
  return (
    <div className="board">
      {board.map((row, rowIdx) => (
        // console.log(rowIdx)
        <RowComponent row={row} key={rowIdx} rowIdx={7 - rowIdx} />
      ))}
    </div>
  );
};

export default BoardComponent;
