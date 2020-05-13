import React, { useState, useEffect } from 'react'
import useInterval from '@use-it/interval'
import wordsAPI from 'random-words'
import WordBox from './components/WordBox'
import TextBox from './components/TextBox'
import Results from './components/Results'
import ResetButton from './components/ResetButton'
import logo from './logo.svg'
import './App.css'
import './tailwind.index.css'

function App() {
  const [seconds, setSeconds] = useState(60)
  const [delay, setDelay] = useState(null)
  const [words, setWords] = useState(wordsAPI({ exactly: 200, maxLength: 5 }))
  const [running, setRunning] = useState(false)
  const [inputText, setInputText] = useState('')
  const [wordIndex, setWordIndex] = useState(0)
  // const [wpm, setWpm] = useState(0)
  const [typedLetters, setTypedLetters] = useState(0)
  const [isWrong, setIsWrong] = useState(false)

  const [disable, setDisable] = useState(false)

  useInterval(() => {
    if (!running) return
    if (seconds === 0) {
      setDisable(true)
      setRunning(false)
      setDelay(null)
    } else setSeconds((sec) => sec - 1)
  }, delay)

  useEffect(() => {
    return () => {
      setDelay(null)
    }
  }, [])

  const resetGame = () => {
    setSeconds(60)
    setDelay(null)
    setWords(wordsAPI({ exactly: 200, maxLength: 5 }))
    setRunning(false)
    setInputText('')
    setWordIndex(0)
    // setWpm(0)
    setTypedLetters(0)
    setIsWrong(false)
    setDisable(false)
  }

  const startGame = (e) => {
    if (!running) {
      setRunning(true)
      setDelay(1000)
    }
    setIsWrong(false)
    let inputTextValue = e.target.value.toLowerCase()
    console.log('inputTextValue', inputTextValue)
    console.log('word', words[wordIndex])
    if (!words[wordIndex].includes(inputTextValue.replace(/ /g, ''))) {
      setIsWrong(true)
    }
    if (inputTextValue.split('').pop() === ' ') {
      let enteredWord = inputTextValue.replace(/ /g, '')
      if (enteredWord === words[wordIndex]) {
        setTypedLetters((letter) => letter + enteredWord.length + 1)
        setIsWrong(false)
        setWords((w) => w.slice(1))
        e.target.value = ''
        // setInputText('')
      } else {
        setIsWrong(true)
      }
    }
  }
  return [
    <nav className="flex w-full text-white ">
      <img src={logo} alt="" className="flex h-16 mx-auto my-6" />
    </nav>,
    <div className="container flex-col mx-auto mt-12 sm:px-8 md:px-32">
      <WordBox words={words} wordIndex={wordIndex} isWrong={isWrong} />
      <div className="flex mt-8 flex-start">
        <TextBox
          disable={disable}
          startGame={startGame}
          seconds={seconds}
          inputText={inputText}
          setInputText={setInputText}
        />
        <ResetButton resetGame={resetGame} />
      </div>
      {disable && <Results typedLetters={typedLetters} />}
    </div>,
  ]
}

export default App
