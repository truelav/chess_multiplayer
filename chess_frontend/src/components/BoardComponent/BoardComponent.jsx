/* eslint-disable react/prop-types */
import RowComponent from "../RowComponent/RowComponents"

const BoardComponent = ({board}) => {
    return (
        <div className="board">
            {board.map((row, rowIdx) => (
                <RowComponent row={row} key={rowIdx} rowIdx={rowIdx}/>
            ))}
        </div>
    )
}

export default BoardComponent