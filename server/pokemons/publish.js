import { Meteor } from 'meteor/meteor'
import { Mongo } from 'meteor/mongo'
import { Pokemons } from '../../collections/collections'


Meteor.publish('pokemons', function pokemonsPublication() {
  return Pokemons.find()
})
