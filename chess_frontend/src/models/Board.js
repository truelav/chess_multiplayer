import Colors from "./Colors";
import Figure_Names from "./Figure_Names";
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
      this.getCell(6, i).figure = new Pawn(
        6,
        i,
        Colors.WHITE,
        Figure_Names.PAWN
      );
      this.getCell(1, i).figure = new Pawn(
        1,
        i,
        Colors.BLACK,
        Figure_Names.PAWN
      );
    }
  }

  initializeRooks() {
    this.getCell(7, 0).figure = new Rook(7, 0, Colors.WHITE);
    this.getCell(7, 7).figure = new Rook(7, 7, Colors.WHITE);
    this.getCell(0, 0).figure = new Rook(0, 0, Colors.BLACK);
    this.getCell(0, 7).figure = new Rook(0, 7, Colors.BLACK);
  }

  initializeKnights() {
    this.getCell(7, 1).figure = new Knight(
      7,
      1,
      Colors.WHITE,
      Figure_Names.KNIGHT
    );
    this.getCell(7, 6).figure = new Knight(
      7,
      6,
      Colors.WHITE,
      Figure_Names.KNIGHT
    );
    this.getCell(0, 1).figure = new Knight(
      0,
      1,
      Colors.BLACK,
      Figure_Names.KNIGHT
    );
    this.getCell(0, 6).figure = new Knight(
      0,
      6,
      Colors.BLACK,
      Figure_Names.KNIGHT
    );
  }

  initializeBishops() {
    this.getCell(7, 2).figure = new Bishop(
      7,
      2,
      Colors.WHITE,
      Figure_Names.BISHOP
    );
    this.getCell(7, 5).figure = new Bishop(
      7,
      5,
      Colors.WHITE,
      Figure_Names.BISHOP
    );
    this.getCell(0, 2).figure = new Bishop(
      0,
      2,
      Colors.BLACK,
      Figure_Names.BISHOP
    );
    this.getCell(0, 5).figure = new Bishop(
      0,
      5,
      Colors.BLACK,
      Figure_Names.BISHOP
    );
  }

  initializeQueens() {
    this.getCell(0, 3).figure = new Queen(
      0,
      3,
      Colors.BLACK,
      Figure_Names.QUEEN
    );
    this.getCell(7, 3).figure = new Queen(
      7,
      3,
      Colors.WHITE,
      Figure_Names.QUEEN
    );
  }

  initializeKings() {
    this.getCell(0, 4).figure = new King(0, 4, Colors.BLACK, Figure_Names.KING);
    this.getCell(7, 4).figure = new King(7, 4, Colors.WHITE, Figure_Names.KING);
  }

  initializePieces() {
    this.initializePawns();
    this.initializeRooks();
    this.initializeBishops();
    this.initializeKnights();
    this.initializeKings();
    this.initializeQueens();
  }

  makeBoardCopy() {
    const matrix = [];
    this.board.forEach((item) => {
      matrix.push([...item]);
    });
    return matrix;
  }

  rotateView(matrix) {
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

    return matrix;
  }
}
