{ Meteor } = require 'meteor/meteor'
{ Mongo } = require 'meteor/mongo'

# Collections
{ Pokemons } = require '../../collections/collections.js'

# Seeds
{ seedPokemons } = require './seeds.coffee'


Meteor.startup ->

  if Pokemons.find().count() is 0
    Pokemons.insert(s) for s in seedPokemons
