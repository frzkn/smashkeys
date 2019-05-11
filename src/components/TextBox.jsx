import React, { Component } from 'react'

export default class TextBox extends Component {
  state = {
    disable: this.props.disable
  }
  render() {
    return (
    <div className="flex-auto flex items-center justify-center">
      <input
        className="flex-grow w-full outline-purple text-2xl p-2 px-4 mx-2 border-2"
        type="text"
        placeholder=""
        onChange={this.props.startGame}
        disabled={this.props.disable? true: false}
      />
      <div className=" shadow-sm text-xl text-white font-bold rounded-full  text-center m-2 h-10 w-10  p-1 border-4 border-purple-light bg-purple-dark">
        {this.props.state.seconds}{" "}
      </div>
    </div>
    )
  }
}
