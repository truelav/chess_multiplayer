import Colors from "./Colors";
import Cell from "./Cell";
import Pawn from "./Pawn";
import Rook from "./Rook";
import Bishop from "./Bishop";
import Knight from "./Knight";
import King from "./King";
import Queen from "./Queen";

export default class Board {
  constructor(board) {
    this.board = board || [];
  }

  getCell(row, col) {
    return this.board[row][col];
  }

  getCellCoordinates(row, col) {
    console.log(this.board[row][col]);
  }

  initializeBoard() {
    for (let row = 0; row < 8; row++) {
      const rowArr = [];
      for (let col = 0; col < 8; col++) {
        if ((row + col) % 2 !== 0) {
          rowArr.push(new Cell(row, col, Colors.BLACK, null));
        } else {
          rowArr.push(new Cell(row, col, Colors.WHITE, null));
        }
      }
      this.board.push(rowArr);
    }
  }

  initializePawns() {
    for (let i = 0; i < 8; i++) {
      this.getCell(6, i).figure = new Pawn(6, i, Colors.WHITE);
      this.getCell(1, i).figure = new Pawn(1, i, Colors.BLACK);
    }
  }

  initializeRooks() {
    this.getCell(7, 0).figure = new Rook(7, 0, Colors.WHITE);
    this.getCell(7, 7).figure = new Rook(7, 7, Colors.WHITE);
    this.getCell(0, 0).figure = new Rook(0, 0, Colors.BLACK);
    this.getCell(0, 7).figure = new Rook(0, 7, Colors.BLACK);
  }

  initializeKnights() {
    this.getCell(7, 1).figure = new Knight(7, 1, Colors.WHITE);
    this.getCell(7, 6).figure = new Knight(7, 6, Colors.WHITE);
    this.getCell(0, 1).figure = new Knight(0, 1, Colors.BLACK);
    this.getCell(0, 6).figure = new Knight(0, 6, Colors.BLACK);
  }

  initializeBishops() {
    this.getCell(7, 2).figure = new Bishop(7, 2, Colors.WHITE);
    this.getCell(7, 5).figure = new Bishop(7, 5, Colors.WHITE);
    this.getCell(0, 2).figure = new Bishop(0, 2, Colors.BLACK);
    this.getCell(0, 5).figure = new Bishop(0, 5, Colors.BLACK);
  }

  initializeQueens() {
    this.getCell(0, 3).figure = new Queen(0, 3, Colors.BLACK);
    this.getCell(7, 3).figure = new Queen(7, 3, Colors.WHITE);
  }

  initializeKings() {
    this.getCell(0, 4).figure = new King(0, 4, Colors.BLACK);
    this.getCell(7, 4).figure = new King(7, 4, Colors.WHITE);
  }

  initializePieces() {
    this.initializePawns();
    this.initializeRooks();
    this.initializeBishops();
    this.initializeKnights();
    this.initializeKings();
    this.initializeQueens();
  }

  highlightCells(selectedCell){
    for(let i = 0; i < 8; i++){
      const row = this.board[i]
      for(let k = 0; k < row.length; k++){
        const targetCell = row[k]
        targetCell.available = !!selectedCell.figure?.isValidMove(targetCell)
      }
    }
  }

  makeBoardCopy() {
    const matrix = [];
    this.board.forEach((item) => {
      matrix.push([...item]);
    });
    return matrix;
  }

  rotateView() {
    const matrix = this.board.slice();
    const n = matrix.length;

    for (let i = 0; i < n / 2; i++) {
      for (let j = 0; j < n; j++) {
        const temp = matrix[i][j];
        matrix[i][j] = matrix[n - i - 1][j];
        matrix[n - i - 1][j] = temp;
      }
    }

    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n / 2; j++) {
        const temp = matrix[i][j];
        matrix[i][j] = matrix[i][n - j - 1];
        matrix[i][n - j - 1] = temp;
      }
    }

    return matrix;
  }
}
