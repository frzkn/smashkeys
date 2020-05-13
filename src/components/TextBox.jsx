import React from 'react'

const TextBox = ({ inputText, setInputText, startGame, disable, seconds }) => {
  return (
    <div className="flex items-center justify-center flex-auto">
      <input
        className="flex-grow w-full p-2 px-4 mx-2 text-2xl border-2 rounded outline-purple text-grey-darkest"
        type="text"
        placeholder=""
        value={inputText}
        onChange={(e) => {
          startGame(e)
          setInputText(e.target.value)
        }}
        disabled={disable ? true : false}
      />
      <div className="flex items-center justify-center p-3 text-xl text-center bg-white rounded-lg text-grey-darkest border-purple-light">
        <span className="w-4 text-grey-darkest">{seconds} </span>
      </div>
    </div>
  )
}

export default TextBox
