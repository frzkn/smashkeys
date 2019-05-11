import React from "react"

const WordBox = ({ state }) => {
  return (
    <div className="border-2 h-64 font-mono leading-loose overflow-y-scroll text-3xl font-medium rounded border-grey-darkest p-5 shadow-md">
      {state.words.map((word, index) => {
        return <span key={index} className="p-2 bg-blue-dark text-white rounded"> {word} </span>
      })}
    </div>
  )
}

export default WordBox
