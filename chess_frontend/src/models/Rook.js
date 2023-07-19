import Figure from "./Figure"
import Colors from "./Colors"

import White_Logo from '../assets/white_rook.png'
import Black_logo from '../assets/black_rook.png'

export default class Rook extends Figure {
    constructor(x, y, color, figure, captured){
        super(x, y, color, figure, captured)
        this.name = figure
        this.logo = color === Colors.WHITE ? White_Logo : Black_logo
    }

    isValidMove(){

    }
    
}