/* eslint-disable react/prop-types */
import CellComponent from "../CellComponent/CellComponent"

const RowComponent = ({row}) => {
    return (
        <div className="row">
        {row.map((cell, colIdx) => (
            <CellComponent cell={cell} key={colIdx} colIdx={colIdx}/>
        ))}
    </div>
    )
}

export default RowComponent