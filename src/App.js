import React from 'react';
import WordBox from './components/WordBox';
import TextBox from './components/TextBox';
import Results from './components/Results';
import ResetButton from './components/ResetButton';
import './App.css';
import './tailwind.index.css'
import words from 'random-words';

function App() {
  const [state, setState] = React.useState({
    words: words(200),
    wordIndex: 0,
    testComplete: false,
    seconds: 60

  })

  const resetGame = () => {
    setState({
      ...state,
      words: words(200),
      seconds: 60
    })
  }
  const startGame = () => {
    setInterval(() => {
      setState({
        ...state,
        seconds: state.seconds--
      })
    }, 1000)
  }
  const [testComplete, SetTextComplete] = React.useState(false)


  return (
    <div className="container flex-col items-center mx-auto bg-grey-lightes mx-auto mt-8">
      <WordBox state={state} setState={setState} />
      <div className="flex">
        <TextBox className="flex-1" state={state} resetGame={resetGame} setState={setState} startGame={startGame} />
        <ResetButton />
      </div>

      {/* {testComplete? <Results/> : ''} */}
    </div>
  );
}

export default App;
