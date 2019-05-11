import React from "react"

const WordBox = props  => {

  return (
    <div className="border-2 flex font-mono overflow-hidden h-32 text-3xl font-medium mt-32 pt-8 rounded border-grey-darkest p-5 shadow-md">
      {props.state.words.map((word, index) => {
        if (index === props.wordIndex.i) {
          return (
            <span key={index} className="p-2 rounded bg-purple-dark text-white">
              {" "}
              {word}{" "}
            </span>
          )
        } else
          return (
            <span key={index} className="p-2 rounded">
              {" "}
              {word}{" "}
            </span>
          )
      })}
    </div>
  )
}

export default WordBox
