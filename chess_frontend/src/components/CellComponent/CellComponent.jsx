/* eslint-disable react/prop-types */

const CellComponent = ({ cell }) => {
  console.log("row: " + cell.x, "col: " + cell.y, cell.figure);

  return (
    <div className={["cell", cell.color, `id_${cell.x}_${cell.y}`].join(" ")}>
      <img
        src={cell?.figure?.logo}
        alt={cell?.figure?.logo}
        className="figure_img"
      />
    </div>
  );
};

export default CellComponent;
