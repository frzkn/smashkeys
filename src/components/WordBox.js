import React from 'react'

const WordBox = (props) => {
  let bgColor = props.isWrong ? 'bg-red-500' : 'bg-purple-500'
  return (
    <div className="flex h-32 p-5 pt-8 mt-32 overflow-hidden font-mono text-3xl font-medium border-2 border-gray-900 rounded shadow-md">
      {props.words.map((word, index) => {
        if (index === props.wordIndex) {
          return (
            <span key={index} className={`p-2 rounded ${bgColor} text-white`}>
              {' '}
              {word}{' '}
            </span>
          )
        } else
          return (
            <span key={index} className="p-2 rounded">
              {' '}
              {word}{' '}
            </span>
          )
      })}
    </div>
  )
}

export default WordBox
