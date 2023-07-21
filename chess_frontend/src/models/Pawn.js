import Figure from "./Figure";
import Colors from "./Colors";

import White_Logo from "../assets/white_pawn.png";
import Black_logo from "../assets/black_pawn.png";

export default class Pawn extends Figure {
  constructor(x, y, color) {
    super(x, y, color);
    this.name = "pawn";
    this.logo = color === Colors.WHITE ? White_Logo : Black_logo;
    this.captured = false;
  }

  makeFigureCaptured() {
    this.captured = true;
  }

  isValidMove(targetCell) {
    if (!super.isValidMove(targetCell)) {
      return false;
    }
    // all other rules for the pawn
  }
}
