import React from "react"
import WordBox from "./components/WordBox"
import TextBox from "./components/TextBox"
import Results from "./components/Results"
import ResetButton from "./components/ResetButton"
import "./App.css"
import "./tailwind.index.css"
import words from "random-words"

function App() {
  const [state, setState] = React.useState({
    words: words(200),
    wordIndex: 0,
    seconds: 60,
    running: false,
    intervalId: null
  })

  const [result, setResult] = React.useState(false)
  const [intervalId, setIntervalId] = React.useState(0)

  const resetGame = () => {
    setResult(false)
    setState({
      ...state,
      words: words(200),
      seconds: 60
    })
  }

  const startGame = () => {
    if (!state.running) {
      setState({
        ...state,
        intervalId: setInterval(() => {
          if (state.seconds <= 0) {
            clearInterval(state.intervalId)
            setResult(true)
          } else {
            setState({
              ...state,
              seconds: --state.seconds
            })
          }
        }, 1000)
      })
    } else {
      console.log("game already running")
    }
  }

  return (
    <div className="container px-32 flex-col mx-auto mt-12">
      <WordBox state={state} setState={setState} />
      <div className="flex flex-start mt-8">
        <TextBox state={state} resetGame={resetGame} startGame={startGame} />
        <ResetButton resetGame={resetGame} />
      </div>
      {result ? <Results /> : <div> Result will show here</div>}
    </div>
  )
}

export default App
