import {useState} from "react"
import connfetti from "canvas-confetti"
import { Square } from "./components/Square.jsx"
import { TURNS } from "./constants.js"
import { checkWinnerFrom, checkEndGame } from "./logic/board.js"
import { WinnerModal } from "./components/WinnerModal.jsx"

function App() {
  console.log('App - render')
  // IMPORTANTE: useState no debe estar dentro de if, while, loop, etc.
  // siempre se debe ejecutar en las mismas líneas del cuerpo del componente
  // pq react se guarda las posiciones en las que se ejecuta
  //const [board, setBoard] = useState(Array(9).fill(null))
  // podemos pasarle una función al useState
  const [board, setBoard] = useState(() => {
    console.log('App - inicializar estado del board')
    // WARNING: Local storate es muy lento, síncrono y bloquea
    const boardFromStorage = window.localStorage.getItem('board')
    return boardFromStorage ? JSON.parse(boardFromStorage) : Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    const turnFromStorage = window.localStorage.getItem('turn')
    return turnFromStorage ?? TURNS.X
  })
  // null: no hay ganador, false: empate
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    // null: no hay ganador, false: empate
    setWinner(null)
  }

  const updateBoard = (index) => {
    // no actualizamos esta posición 
    // si ya tiene algo o ya hay un ganador
    if(board[index] || winner) {return}

    // actualizar el tablero
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    // cambiar el turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
    
    // guardar aquí la partida
    window.localStorage.setItem('board', JSON.stringify(newBoard))
    window.localStorage.setItem('turn', newTurn)
    
    // revisar si hay un ganador
    const newWinner = checkWinnerFrom(newBoard)
    if (newWinner) {
      connfetti()
      // actualiza el estado de manera asínncrona 
      // (NO bloquea la ejecución de la siguiente línea)
      setWinner(newWinner)
      // winner puede ser null en este punto
      console.log(winner)
    } else if (checkEndGame(newBoard)) {
      setWinner(false) // empate
    }
  }

  return (
    <main className="board">
      <h1>Tic tac toe</h1>
      <button onClick={resetGame}>Empezar de nuevo</button>
      <section className="game">
        {
          board.map((square, index) => {
            return (
              <Square
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {square}
              </Square>
            )
          })
        }
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      <WinnerModal resetGame={resetGame} winner={winner}/>
    </main>
  )

}

export default App
