/* eslint-disable react/prop-types */

const CellComponent = ({ cell, handleSelectCell, selectedCell }) => {
  //   console.log("row: " + cell.x, "col: " + cell.y, cell.figure);
  const selected =
    selectedCell?.x === cell.x && selectedCell?.y === cell.y ? "selected" : "";
  return (
    <div
      className={["cell", cell.color, selected, `id_${cell.x}_${cell.y}`].join(
        " "
      )}
      onClick={() => handleSelectCell(cell)}
    >
      <img
        src={cell?.figure?.logo}
        alt={cell?.figure?.logo}
        className="figure_img"
      />
    </div>
  );
};

export default CellComponent;
