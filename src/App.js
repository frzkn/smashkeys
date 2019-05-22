import React from "react"
import words from "random-words"
import WordBox from "./components/WordBox"
import TextBox from "./components/TextBox"
import Results from "./components/Results"
import ResetButton from "./components/ResetButton"
import "./App.css"
import "./tailwind.index.css"

function App() {
  const [state, setState] = React.useState({
    words: words({exactly: 200, maxLength: 5}),
    seconds: 60,
    running: false,
    inputText: "",
    intervalId: null
  })

  const [wordIndex, setWordIndex] = React.useState({
    i: 0
  })
  const [wpm, setWPM] = React.useState({
    grossWPM: 0,
    typedLetters: 0,
  })

  const [disable, setDisable] = React.useState(false)

  const resetGame = () => {
    window.location.reload()
    // setDisable(false)
    // setState({
    //   ...state,
    //   words: words(200),
    //   seconds: 60,
    //   running: false,
    //   intervalId: 0
    // })
    // setWPM(0)
  }

  const startGame = e => {
    if (!state.running) {
      setState({
        ...state,
        running: true,
        intervalId: setInterval(() => {
          if (state.seconds === 0) {
            clearInterval(state.intervalId)
            setDisable(true)
          } else {
            setState({
              ...state,
              seconds: --state.seconds
            })
          }
        }, 1000)
      })
    }
    let inputTextValue = e.target.value.toLowerCase()
    if (inputTextValue.split("").pop() === " ") {
      let enteredWord = inputTextValue.replace(/ /g, "")
      if (enteredWord === state.words[wordIndex.i]) {
        setWPM({
          ...setWPM,
          typedLetters: wpm.typedLetters + enteredWord.length + 1
        })
        state.words.shift()
        e.target.value = ""
      }
    }
  }
  return (
    <div className="container sm:px-8 md:px-32 flex-col mx-auto mt-12">
      <WordBox state={state} wordIndex={wordIndex} setState={setState} />
      <div className="flex flex-start mt-8">
        <TextBox
          state={state}
          disable={disable}
          resetGame={resetGame}
          startGame={startGame}
        />
        <ResetButton resetGame={resetGame} />
      </div>
      {disable && <Results wpm={wpm} /> }
    </div>
  )
}

export default App
