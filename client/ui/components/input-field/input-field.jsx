// import main components / modules
import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'


export default class InputField extends Component {
  render() {
    return (
      <div className="form-group">
        <input type={this.props.type}
               className="form-control"
               name={this.props.name}
               placeholder={this.props.placeholder}
               onFocus={this.props.onFocus}
               onBlur={this.props.onBlur}
               onChange={this.props.onChange}
               autoComplete="new-password"
               value={this.props.value} />
      </div>
    )
  }
}

// Declaring propTypes
React.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func
}
