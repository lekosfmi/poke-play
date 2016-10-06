// Import main components / modules
import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import React, { Component } from 'react'
import { render } from 'react-dom'


export default class Navbar extends Component {
 render() {
   return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">

          <div className="navbar-header">
            <a className="navbar-brand" href="/">Poké Play</a>
          </div>



            <ul className="nav navbar-nav navbar-right">

            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button">Info <span className="caret"></span></a>
              <ul className="dropdown-menu">
                <li><a href="http://www.lekosfmi.com" target="_blank">Lekosfmi</a></li>
                <li><a href="#" target="_blank">Github</a></li>
              </ul>
            </li>


            </ul>

        </div>
      </nav>
    )
  }
}
