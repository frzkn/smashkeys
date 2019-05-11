import React from 'react'
const TextBox = props => {
  return (
    <div className="flex-auto flex items-center justify-center">
      <input
        className="flex-grow w-full text-2xl p-2 px-4 mx-2 border-2"
        type="text"
        placeholder="Start smashing!"
        onChange={props.startGame}
      />
      <div className=" shadow-sm text-xl text-white font-bold rounded-full  text-center m-2 h-10 w-10  p-1 border-4 border-purple-light bg-purple-dark">
        {props.state.seconds}{" "}
      </div>
    </div>
  )
}

export default TextBox
