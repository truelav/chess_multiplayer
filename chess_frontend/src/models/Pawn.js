import Figure from "./Figure"
import Colors from "./Colors"

import White_Logo from '../assets/white_pawn.png'
import Black_logo from '../assets/black_pawn.png'

export default class Pawn extends Figure {
    constructor(x, y, color, figure, captured){
        super(x, y, color, figure, captured)
        this.name = figure
        this.logo = color === Colors.WHITE ? White_Logo : Black_logo
    }

    isValidMove(){

    }
    
}