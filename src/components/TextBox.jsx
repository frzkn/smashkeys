import React from 'react'
const TextBox = ({ state: { seconds } }, { resetGame, startGame }) => {
  return (
    <div className="flex shadow-md justify-center items-center mt-8">
      <input className="w-full text-2xl p-4" type="text" placeholder="Start smashing!" onChange={()=> startGame()}/>
      <div className="h-full text-xl text-white font-bold p-3 m-2 rounded-full border-1 border-blue-light bg-purple-dark"> {seconds}</div>
    </div>
  )
}

export default TextBox
