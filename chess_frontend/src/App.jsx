import { useEffect, useState } from "react";
import Board from "./models/Board";
import { Player } from "./models/Player";
import BoardComponent from "./components/BoardComponent/BoardComponent";
import "./App.css";
import Colors from "./models/Colors";

function App() {
  const [board, setBoard] = useState(new Board());
  const [selectedCell, setSelectedCell] = useState(null);
  const [selectedFigure, setSelectedFigure] = useState(null);
  const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
  const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
  const [currentPlayerTurn, setCurrentPlayerTurn] = useState(null);

  useEffect(() => {
    restartGame();
  }, []);

  const restartGame = () => {
    const newBoard = new Board();
    newBoard.initializeBoard();
    newBoard.initializePieces();
    setCurrentPlayerTurn(whitePlayer);
    setBoard(newBoard);
  };

  const checkPlayerTurn = () => {};

  const changePlayerTurn = () => {};

  const rotateView = () => {
    const newBoard = board.rotateView();
    console.log(newBoard);
    setBoard(new Board(newBoard));
  };

  const handleMoveFigure = (startX, startY, endX, endY, figure) => {
    const curBoard = board.makeBoardCopy();
    const curCell = curBoard[startX][startY];
    const targetCell = curBoard[endX][endY];
    figure.x = endX;
    figure.y = endY;
    targetCell.figure = figure;
    curCell.figure = null;
    setSelectedCell(null);
    setSelectedFigure(null);
    setBoard(new Board(curBoard));
  };

  const handleSelectCell = (cell) => {
    if (cell.figure) {
      // do all the checks before
      setSelectedCell(cell);
      setSelectedFigure(cell.figure);
    }

    if (!cell.figure && !selectedCell.figure) {
      return;
    }

    if (selectedFigure) {
      handleMoveFigure(
        selectedCell.x,
        selectedCell.y,
        cell.x,
        cell.y,
        selectedFigure
      );
    }

    console.log("row: " + cell.x, "col: " + cell.y, cell.figure);
  };

  return (
    <>
      <section className="main">
        <div className="board_outer_container">
          <BoardComponent
            board={board.board}
            handleSelectCell={handleSelectCell}
            selectedCell={selectedCell}
          />
        </div>
        {/* <div>
          <LostFigures
            title="Черные фигуры"
            figures={board.lostBlackFigures}
          />
          <LostFigures
            title="Белые фигуры"
            figures={board.lostWhiteFigures}
          />
        </div> */}
        <button onClick={rotateView}>Rotate View</button>
      </section>
    </>
  );
}

export default App;
