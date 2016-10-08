// Import main components / modules
import { Meteor } from 'meteor/meteor'
import { createContainer } from 'meteor/react-meteor-data'
import React, { Component } from 'react'
import { render } from 'react-dom'
import pokemonGif from 'pokemon-gif'

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
     pokeUrl: pokemonGif('rayquaza')
   }
 }

 renderPokemon(name) {
   const isPositiveInteger = (n) => n == "0" || ((n | 0) > 0 && n % 1 == 0)

   let pokeUrl = pokemonGif((isPositiveInteger(name) ? parseInt(name) : name))

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
        <Navbar />

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
