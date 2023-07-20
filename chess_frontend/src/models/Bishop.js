import Figure from "./Figure";
import Colors from "./Colors";

import White_Logo from "../assets/white_bishop.png";
import Black_logo from "../assets/black_bishop.png";

export default class Bishop extends Figure {
  constructor(x, y, color, captured) {
    super(x, y, color, captured);
    this.name = "bishop";
    this.logo = color === Colors.WHITE ? White_Logo : Black_logo;
  }

  isValidMove() {}
}
