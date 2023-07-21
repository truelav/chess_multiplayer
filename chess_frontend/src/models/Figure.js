import Figure_Names from "./Figure_Names";

export default class Figure {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.captured = false;
  }

  isValidMove(targetCell) {
    if (targetCell.figure?.color === this.color) {
      return false;
    }
    if (targetCell.figure?.name === Figure_Names.KING) {
      return false;
    }
    return true
  }

  getFigureColor() {}

  getFigureCell() {}

  setFigureCell() {}
}
