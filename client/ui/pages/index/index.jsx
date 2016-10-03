// Import main components / modules
import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import React, { Component } from 'react'
import { render } from 'react-dom'

// Import custom components
import PokeInput from '../../components/poke-input/poke-input.jsx'
import Navbar from '../../components/navbar/navbar.jsx'
import PokeDropdown from '../../components/poke-dropdown/poke-dropdown.jsx'
import PokeList from '../../components/poke-list/poke-list.jsx'
import PokeGif from '../../components/poke-gif/poke-gif.jsx'

// Import collections
import { Pokemons } from '../../../../collections/collections.js'


export default class Index extends Component {
  constructor(props) {
   super(props)
   this.state = {
     pokeUrl: 'http://www.pokestadium.com/sprites/xy/rayquaza.gif'
   }
 }

 renderPokemon(name) {
   let pokeName = name.toLowerCase()
   let pokeUrl = `http://www.pokestadium.com/sprites/xy/${pokeName}` + '.gif'

   this.setState({ pokeUrl })
 }

 pokeSubmit(e) {
   e.preventDefault()

   const pokeName = $('#poke-name').val().toLowerCase()

   this.renderPokemon(pokeName)
 }

 render() {
   return (
     <div>
        {/* }<Navbar /> */}

        <div className="jumbotron">
          <PokeGif url={this.state.pokeUrl} />
        </div>

        <PokeInput onSubmit={this.pokeSubmit.bind(this)} />
     </div>
   )
 }
}

export default IndexContainer = createContainer(() => {
  Meteor.subscribe('pokemons')

  const pokemons = Pokemons.find().fetch()

  return { pokemons }
}, Index)
