import React from 'react'
import { MdSync } from 'react-icons/md'

const ResetButton = (resetGame) => {

  return (
      <MdSync className="h-12 w-12 mr-4 text-red hover:text-red-dark" onClick={() => resetGame()}/>
  )
}

export default ResetButton
