import Figure_Names from "./Figure_Names";

export default class Figure {
  constructor(x, y, color, figure) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.figure = figure;
    this.captured = false;
  }

  isValidMove(targetCell) {
    if (targetCell.figure?.color === this.color) {
      return false;
    }
    if (targetCell.figure?.name === Figure_Names.KING) {
      return false;
    }
  }

  getFigureColor() {}

  getFigureCell() {}

  setFigureCell() {}
}
