// polyfill webpack require.ensure
if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

import React from 'react'
import { Route, IndexRoute } from 'react-router'

import constants from './constants'
import Layout from './containers/Layout'
import {
  fetchPeoples,
  selectedPeoplesPage,
  fetchPlanets,
  selectedPlanetsPage,
  fetchFilms,
  selectedFilmsPage,
  fetchSpecies,
  selectedSpeciesPage,
  fetchVehicles,
  selectedVehiclesPage,
  fetchStarships,
  selectedStarshipsPage
 } from './actions'

/**
 * @todo: Refactor
 * It's kinda weird using require('blah').default
 *
 * May upgrade to webpack 2 using System.import
 */
const routes = (
  <Route path="/" component={Layout}>

    <IndexRoute getComponent={(nextState, cb) => {
      if (!__CLIENT__) {
        cb(null, require('./containers/Home').default)
      } else {
        require.ensure([], require => {
          cb(null, require('./containers/Home').default)
        })
      }
    }}/>

    <Route path="people" getComponent={(nextState, cb) => {
      if (!__CLIENT__) {
        let PeopleContainer = require('./containers/People').default
        PeopleContainer.need = [
          fetchPeoples.bind(null, nextState.location.query.page),
          selectedPeoplesPage.bind(null, nextState.location.query.page)
        ]
        cb(null, PeopleContainer)
      } else {
        require.ensure([], require => {
          cb(null, require('./containers/People').default)
        })
      }
    }}/>

    <Route path="planets" getComponent={(nextState, cb) => {
      if (!__CLIENT__) {
        let PlanetContainer = require('./containers/Planet').default
        PlanetContainer.need = [
          fetchPlanets.bind(null, nextState.location.query.page),
          selectedPlanetsPage.bind(null, nextState.location.query.page)
        ]
        cb(null, PlanetContainer)
      } else {
        require.ensure([], require => {
          cb(null, require('./containers/Planet').default)
        })
      }
    }}/>

    <Route path="films" getComponent={(nextState, cb) => {
      if (!__CLIENT__) {
        let FilmContainer = require('./containers/Film').default
        FilmContainer.need = [
          fetchFilms.bind(null, nextState.location.query.page),
          selectedFilmsPage.bind(null, nextState.location.query.page)
        ]
        cb(null, FilmContainer)
      } else {
        require.ensure([], require => {
          cb(null, require('./containers/Film').default)
        })
      }
    }}/>

    <Route path="species" getComponent={(nextState, cb) => {
      if (!__CLIENT__) {
        let SpeciesContainer = require('./containers/Species').default
        SpeciesContainer.need = [
          fetchSpecies.bind(null, nextState.location.query.page),
          selectedSpeciesPage.bind(null, nextState.location.query.page)
        ]
        cb(null, SpeciesContainer)
      } else {
        require.ensure([], require => {
          cb(null, require('./containers/Species').default)
        })
      }
    }}/>

    <Route path="vehicles" getComponent={(nextState, cb) => {
      if (!__CLIENT__) {
        let VehicleContainer = require('./containers/Vehicle').default
        VehicleContainer.need = [
          fetchVehicles.bind(null, nextState.location.query.page),
          selectedVehiclesPage.bind(null, nextState.location.query.page)
        ]
        cb(null, VehicleContainer)
      } else {
        require.ensure([], require => {
          cb(null, require('./containers/Vehicle').default)
        })
      }
    }}/>

    <Route path="starships" getComponent={(nextState, cb) => {
      if (!__CLIENT__) {
        let StarshipContainer = require('./containers/Starship').default
        StarshipContainer.need = [
          fetchStarships.bind(null, nextState.location.query.page),
          selectedStarshipsPage.bind(null, nextState.location.query.page)
        ]
        cb(null, StarshipContainer)
      } else {
        require.ensure([], require => {
          cb(null, require('./containers/Starship').default)
        })
      }
    }}/>

    <Route path="*" getComponent={(nextState, cb) => {
      if (!__CLIENT__) {
        cb(null, require('./containers/NotFoundPage').default)
      } else {
        require.ensure([], require => {
          cb(null, require('./containers/NotFoundPage').default)
        })
      }
    }}/>

  </Route>
)

export default routes
