import {useState} from "react"
import connfetti from "canvas-confetti"
import { Square } from "./components/Square"
import { TURNS, WINNER_COMBOS } from "./constants"
import { checkWinner } from "./logic/board"

function App() {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  // null: no hay ganador, false: empate
  const [winner, setWinner] = useState(null)

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    // null: no hay ganador, false: empate
    setWinner(null)
  }

  const checkEndGame = (boardToCheck) => {
    // revisamos si hay un empate 
    // si no hay más espacios vacíos
    // en el tablero
    return boardToCheck.every((square) => square !== null)
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

    // revisar si hay un ganador
    const newWinner = checkWinner(newBoard)
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

      {
        winner !== null && (
          <section className="winner">
            <div className="text">
              <h2>
                {
                  winner === false
                    ? 'Empate'
                    : `Ganó:`
                }
              </h2>

              <header className="win">
                {winner && <Square>{winner}</Square>}
              </header>

              <footer>
                <button onClick={resetGame}>Empezar de nuevo</button>
              </footer>
            </div>
          </section>
        )
      }
    </main>
  )

}

export default App
