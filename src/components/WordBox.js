import React from "react"

const WordBox = ({ state }) => {
  return (
    <div className="border-2 h-64 font-mono leading-loose overflow-y-scroll text-3xl font-medium rounded border-grey-darkest p-5 shadow-md">
      {state.words.map(word => {
        return <span> {word} </span>
      })}
    </div>
  )
}

export default WordBox
