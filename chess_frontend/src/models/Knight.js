import Figure from "./Figure";
import Colors from "./Colors";

import White_Logo from "../assets/white_knight.png";
import Black_logo from "../assets/black_knight.png";

export default class Knight extends Figure {
  constructor(x, y, color, captured) {
    super(x, y, color, captured);
    this.name = "knight";
    this.logo = color === Colors.WHITE ? White_Logo : Black_logo;
  }

  isValidMove() {}
}
