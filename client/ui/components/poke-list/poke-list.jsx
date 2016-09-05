// Import main components / modules
import { Meteor } from 'meteor/meteor'
import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'


export default class PokeList extends Component {
  render() {
    return (
      <li id="poke-list" key={this.props._id} onClick={this.props.onClick}>
        <a>{this.props.name}</a>
      </li>
    )
  }
}

React.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
}
