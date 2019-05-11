import React from "react"
import { MdKeyboard } from "react-icons/md"
const Results = props => {
  {
    console.log(props)
  }
  return (
    <div className="flex mx-auto w-1/5 text-purple-darker  border-b-2 border-purple items-center justify-around">
      <MdKeyboard className="h-32 w-32 text-purple-dark" />
      <div className="flex text-3xl font-bold items-end justify-center">
        <span className="text-5xl">{props.wpm} </span>WPM
      </div>
    </div>
  )
}

export default Results
