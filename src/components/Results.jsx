import React from 'react'
import { MdKeyboard } from 'react-icons/md'
const Results = (props) => {
  return (
    <div className="flex items-center justify-around w-1/5 mx-auto text-purple-600 border-b-2 border-purple">
      <MdKeyboard className="w-32 h-32 min-w-full text-purple-600" />
      <div className="flex items-end justify-center text-3xl font-bold">
        <span className="text-5xl">{Math.round(props.typedLetters / 5)} </span>WPM
      </div>
    </div>
  )
}
export default Results
