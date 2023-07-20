import Figure from "./Figure";
import Colors from "./Colors";

import White_Logo from "../assets/white_king.png";
import Black_logo from "../assets/black_king.png";

export default class King extends Figure {
  constructor(x, y, color, captured) {
    super(x, y, color, captured);
    this.name = "king";
    this.logo = color === Colors.WHITE ? White_Logo : Black_logo;
  }

  isValidMove() {}
}
