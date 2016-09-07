// Import main components / modules
import { Meteor } from 'meteor/meteor'
import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'


export default class PokeDropdown extends Component {
  render() {
    return (
      <div className="btn-group pull-right" role="group">
        <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Pokemon <span className="caret"></span>
        </button>
        <ul className="dropdown-menu">
          {this.props.renderPokeDropdown}
        </ul>
      </div>
    )
  }
}

React.propTypes = {
  renderPokeList: PropTypes.func.isRequired
}
