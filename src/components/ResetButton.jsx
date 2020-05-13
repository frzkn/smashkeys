import React from 'react'
import { MdSync } from 'react-icons/md'

const ResetButton = (props) => {
  return (
    <MdSync
      className="w-8 h-8 m-2 my-auto text-purple-700 rounded-full cursor-pointer flex-start border-1 hover:text-red-600"
      onClick={() => props.resetGame()}
    />
  )
}

export default ResetButton
