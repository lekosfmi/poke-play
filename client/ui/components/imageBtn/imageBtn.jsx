// import main components / modules
import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'


export default class ImageBtn extends Component {
  constructor(props) {
    super(props)

    this.state = {
      count: 0
    }
  }

  toggleImages(e) {
    e.preventDefault()

    const image = [
      // Ice Field
      "http://www.totallyawesomeadventures.com/Photos/Pemberton%20Ice%20Fields%20C.jpg",

      // Ocean Sea Life
      "https://s-media-cache-ak0.pinimg.com/originals/07/38/4d/07384d663dab16774214a41ef70323b3.jpg",

      // San Francisco
      "http://www.dentons.com/~/media/Images/Website/Background%20Images/Offices/San%20Francisco/Sanfransisco_dreamstime_1.jpg",

      // Desert Field
      "http://www.thewallpapers.org/photo/25427/desert-field.jpg",

      // Grassfield
      "http://wallpaperbeta.com/wallpaper_3840x2160/grass_field_green_sky_horizon_landscapes_ultra_3840x2160_hd-wallpaper-71268.jpg"
    ]

    this.state.count++

    if (this.state.count > 4) this.state.count = 0;

    $('.jumbotron').css({ 'background-image': `url(${image[this.state.count]})` })

    console.log(image[this.state.count])
  }

  render() {
    return (
      <span className="input-group-btn dropup">
        <button type="button"
                className="btn btn-default dropdown-toggle"
                data-toggle="dropdown"
                onClick={this.toggleImages.bind(this)}>
          <span className="glyphicon glyphicon-picture"></span>
        </button>
      </span>
    )
  }
}
