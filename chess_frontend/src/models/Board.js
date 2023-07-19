import Colors from "./Colors"
import Figure_Names from "./Figure_Names"
import Cell from "./Cell"

import Pawn from "./Pawn"
import Rook from "./Rook"

export default class Board {
    constructor(){
        this.board = []
    }

    getCell(x, y){
        return this.board[x][y]
    }

    initializeBoard(){
        for(let row = 0; row < 8; row++){
            const rowArr = []
            for(let col = 0; col < 8; col++){
                if((row + col) % 2 === 0){
                    rowArr.push(new Cell(row + 1, col + 1, Colors.BLACK, null))
                } else {
                    rowArr.push(new Cell(row + 1, col + 1, Colors.WHITE, null))
                }
            }
            this.board.push(rowArr)
        }
        this.board.reverse()
    }


    initializePawns(){
        for(let i = 0; i < 8; i++){
            this.getCell(6, i).figure = new Pawn(1, i, Colors.WHITE, Figure_Names.PAWN)
            this.getCell(1, i).figure = new Pawn(1, i, Colors.BLACK, Figure_Names.PAWN)
        }
    }

    initializeRooks(){
        this.getCell(7, 0).figure = new Rook(7, 0, Colors.WHITE, Figure_Names.ROOK)
        this.getCell(7, 7).figure = new Rook(7, 7, Colors.WHITE, Figure_Names.ROOK)
        this.getCell(0, 0).figure = new Rook(7, 0, Colors.BLACK, Figure_Names.ROOK)
        this.getCell(0, 7).figure = new Rook(7, 7, Colors.BLACK, Figure_Names.ROOK)
    }

    initializeKnights(){
        
    }

    initializeBishops(){
        
    }

    initializeQueens(){
        
    }

    initializeKings(){
        
    }

    initializePieces(){
        this.initializePawns()
        this.initializeRooks()
    }

    rotateView() {
        const matrix = this.board

        for (let i = 0; i < 8; i++) {
          for (let j = i; j < 8; j++) {
            const temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
          }
        }
      

        for (let i = 0; i < 8 / 2; i++) {
          for (let j = 0; j < 8; j++) {
            const temp = matrix[i][j];
            matrix[i][j] = matrix[8 - i - 1][j];
            matrix[8 - i - 1][j] = temp;
          }
        }
        return matrix
    }
}