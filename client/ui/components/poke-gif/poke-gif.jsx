// Import main components / modules
import { Meteor } from 'meteor/meteor'
import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'


export default class PokeGif extends Component {
  render() {
    return (
      <div>
          <img id="poke-gif" src={this.props.url} />
      </div>
    )
  }
}

React.propTypes = {
  url: PropTypes.string.isRequired
}
