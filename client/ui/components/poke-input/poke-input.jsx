// import main components / modules
import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'

// custom components
import ImageBtn from '../imageBtn/imageBtn.jsx'


export default class PokeInput extends Component {
  changeBorderColor(color) {
    $('.form-control, .input-group-btn').css({
      "border-top": `solid 5px ${color}`,
      "border-bottom": `solid 5px ${color}`
    })
  }

  onFocus() {
    this.changeBorderColor('#0071b9')

    $('.btn-default').css({ "color": "#0071b9" })
  }

  onBlur() {
    this.changeBorderColor('#fff')

    $('.btn-default').css({ "color": "darkgrey" })
  }

  render() {
    return (
      <form onSubmit={this.props.onSubmit} className="input-group">

        <ImageBtn />

        <input type="text"
               className="form-control"
               id="poke-name"
               placeholder="Type in a Pokémon's name or their Pokédex # from 1 - 721"
               onFocus={this.onFocus.bind(this)}
               onBlur={this.onBlur.bind(this)}
               autoComplete="new-password" />

         <span className="input-group-btn">
            <button type="submit" className="btn btn-default">Go!</button>
         </span>
      </form>
    )
  }
}

// Declaring propTypes
React.propTypes = {
  onSubmit: PropTypes.func.isRequired
}
