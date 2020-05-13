import React from 'react'
import words from 'random-words'
import WordBox from './components/WordBox'
import TextBox from './components/TextBox'
import Results from './components/Results'
import ResetButton from './components/ResetButton'
import './App.css'
import './tailwind.index.css'

function App() {
  const [state, setState] = React.useState({
    words: words({ exactly: 200, maxLength: 5 }),
    seconds: 60,
    running: false,
    inputText: '',
    intervalId: null,
  })

  const [wordIndex, setWordIndex] = React.useState({
    i: 0,
  })
  const [wpm, setWPM] = React.useState({
    grossWPM: 0,
    typedLetters: 0,
  })

  const [isWrong, setIsWrong] = React.useState(false)

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

  const startGame = (e) => {
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
              seconds: --state.seconds,
            })
          }
        }, 1000),
      })
    }
    setIsWrong(false)
    let inputTextValue = e.target.value.toLowerCase()
    if (!state.words[wordIndex.i].includes(inputTextValue.replace(/ /g, ''))) {
      setIsWrong(true)
    }
    if (inputTextValue.split('').pop() === ' ') {
      let enteredWord = inputTextValue.replace(/ /g, '')
      if (enteredWord === state.words[wordIndex.i]) {
        setWPM({
          ...setWPM,
          typedLetters: wpm.typedLetters + enteredWord.length + 1,
        })
        setIsWrong(false)
        state.words.shift()
        e.target.value = ''
      } else {
        setIsWrong(true)
      }
    }
  }
  return (
    <div className="container flex-col mx-auto mt-12 sm:px-8 md:px-32">
      <WordBox state={state} wordIndex={wordIndex} setState={setState} isWrong={isWrong} />
      <div className="flex mt-8 flex-start">
        <TextBox state={state} disable={disable} resetGame={resetGame} startGame={startGame} resetGame={resetGame} />
        <ResetButton resetGame={resetGame} />
      </div>
      {disable && <Results wpm={wpm} />}
    </div>
  )
}

export default App
