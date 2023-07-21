/* eslint-disable react/prop-types */
import RowComponent from "../RowComponent/RowComponents";

const BoardComponent = ({ board, handleSelectCell, selectedCell }) => {
  return (
    <div className="board">
      {board.map((row, rowIdx) => (
        // console.log(rowIdx)
        <RowComponent
          row={row}
          key={rowIdx}
          rowIdx={rowIdx}
          handleSelectCell={handleSelectCell}
          selectedCell={selectedCell}
        />
      ))}
    </div>
  );
};

export default BoardComponent;
