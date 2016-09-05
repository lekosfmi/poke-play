// import main components
import React, { Component, PropTypes } from 'react'
import { render } from 'react-dom'

// import custom components
import GoogleAnalytics from '../ui/components/google-analytics/google-analytics.jsx'


export default class AppLayout extends Component {
  render() {
    return (
      <div>
        {this.props.content}
        <GoogleAnalytics />
      </div>
    )
  }
}


React.propTypes = {

}
