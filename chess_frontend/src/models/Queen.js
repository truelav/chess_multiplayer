import Figure from "./Figure";
import Colors from "./Colors";

import White_Logo from "../assets/white_queen.png";
import Black_logo from "../assets/black_queen.png";

export default class Queen extends Figure {
  constructor(x, y, color, captured) {
    super(x, y, color, captured);
    this.name = "queen";
    this.logo = color === Colors.WHITE ? White_Logo : Black_logo;
  }

  isValidMove() {}
}
