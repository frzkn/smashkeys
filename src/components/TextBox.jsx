import React, { Component } from 'react'

export default class TextBox extends Component {
  state = {
    disable: this.props.disable,
  }
  render() {
    return (
      <div className="flex items-center justify-center flex-auto">
        <input
          className="flex-grow w-full p-2 px-4 mx-2 text-2xl border-2 outline-purple text-grey-darkest"
          type="text"
          placeholder=""
          onChange={this.props.startGame}
          disabled={this.props.disable ? true : false}
        />
        <div className="flex items-center justify-center p-3 text-xl text-center bg-white rounded-lg text-grey-darkest border-purple-light ">
          <span className="w-4 text-grey-darkest">{this.props.state.seconds} </span>
        </div>
      </div>
    )
  }
}
