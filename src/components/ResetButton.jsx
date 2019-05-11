import React from 'react'
import { MdSync } from 'react-icons/md'

const ResetButton = (props) => {

  return (
      <MdSync className="flex-start h-12 w-12 m-2 text-purple-dark shadow-sm border-1 hover:text-white hover:bg-red rounded-full" onClick={() => props.resetGame()} />
  )
}

export default ResetButton
