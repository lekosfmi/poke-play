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
      // Lake
      "http://amazingpics.net/content/Mountains/Beautiful%20Mountains%2050.jpg",

      // Ocean
      "http://kurld.com/images/wallpapers/underwater-pictures/underwater-pictures-6.jpg",

      // San Francisco
      "http://www.hdwallpaper.nu/wp-content/uploads/2015/05/Different_Perspectives_of_SF.jpg",

      // Desert Field
      "http://www.canyonspiritventures.com/wp-content/uploads/2015/01/AZSunset.jpg",

      // Grassfield
      "http://www.desktopimages.org/pictures/2013/1029/6/orig_30026.jpg"
    ]

    if (this.state.count > image.length - 1) this.state.count = 0;

    $('.jumbotron').css({
      'background': `linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2) ), url(${image[this.state.count++]}) center center`,
      'background-size': 'cover'
    })
  }

  render() {
    return (
      <span className="input-group-btn">
        <button type="button"
                className="btn btn-default"
                onClick={this.toggleImages.bind(this)}>
          <span className="glyphicon glyphicon-picture"></span>
        </button>
      </span>
    )
  }
}
