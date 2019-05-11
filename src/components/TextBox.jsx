import React from 'react'
const TextBox = props => {
  return (
    <div className="flex-auto flex items-center justify-center">
      <input
        className="flex-grow w-full text-2xl p-4 border-2"
        type="text"
        placeholder="Start smashing!"
        onChange={props.startGame}
      />
      <div className=" shadow-sm text-xl text-white font-bold rounded-full w-10 h-10 m-2 p-2 border-1 border-blue-light bg-purple-dark">{props.state.seconds}</div>

    </div>
  )
}

export default TextBox
