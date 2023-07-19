import { useEffect, useState } from 'react'
import Board from './models/Board'
import BoardComponent from './components/BoardComponent/BoardComponent'
import './App.css'

function App() {
  const [board, setBoard] = useState(new Board())

  useEffect(() => {
    const newBoard = new Board()
    newBoard.initializeBoard()
    newBoard.initializePieces()
    setBoard(newBoard)
  }, [])

  const rotateView = () => {
    const newBoard = board
    console.log(newBoard.rotateView())
    setBoard(newBoard)
  }

  // console.log(board)
  return (
    <>
      <section className='main'>
        <div className='board_outer_container'>
          <BoardComponent board={board.board}/>
        </div>
        <button onClick={rotateView}>Rotate View</button>
      </section>
    </>
  )
}

export default App
