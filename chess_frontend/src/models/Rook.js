import Figure from "./Figure";
import Colors from "./Colors";

import White_Logo from "../assets/white_rook.png";
import Black_logo from "../assets/black_rook.png";

export default class Rook extends Figure {
  constructor(x, y, color, captured) {
    super(x, y, color, captured);
    this.name = "rook";
    this.logo = color === Colors.WHITE ? White_Logo : Black_logo;
  }

  isValidMove() {}
}
