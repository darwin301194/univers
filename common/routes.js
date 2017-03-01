// polyfill webpack require.ensure
if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Layout from './containers/Layout'
import { fetchPeoples, selectedPeoplesPage } from './actions'

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
      }
      require.ensure([], require => {
        cb(null, require('./containers/People').default)
      })
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
