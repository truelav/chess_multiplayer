export default class Cell {
  constructor(x, y, color, figure) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.figure = figure;
    this.available = false;
  }

  isCellEmpty(){
    return this.figure === null
  }

  isEmptyVertical(targetCell) {

    const min = Math.min(this.y, targetCell.y)
    const max = Math.max(this.y, targetCell.y)

    for(let row = min + 1; row < max; row++){
      if(this.board.getCell(this.x, row).isCellEmpty()){
        return true
      }
    }
  }

  isEmptyHorizontal(targetCell) {}

  isEmptyDiagonal(targetCell) {}
}
