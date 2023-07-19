/* eslint-disable react/prop-types */


const CellComponent = ({cell}) => {
    console.log(cell)

    return (
        <div className={['cell', cell.color, `id_${cell.x}_${cell.y}`].join(' ')}>
            <img src={cell?.figure?.logo} alt={cell?.figure?.logo} className="figure_img"/>
        </div>
    )
}

export default CellComponent