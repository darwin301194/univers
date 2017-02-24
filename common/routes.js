// polyfill webpack require.ensure
if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Layout from './containers/Layout';

/**
 * @todo: Refactor
 * It's kinda weird using require('blah').default
 *
 * May upgrade to webpack 2 using System.import
 */
const routes = (
  <Route path="/" component={Layout}>

    <IndexRoute getComponent={(location, cb) => {
      if (!__CLIENT__) {
        cb(null, require('./containers/Home').default)
      } else {
        require.ensure([], require => {
          cb(null, require('./containers/Home').default)
        })
      }
    }}/>

    <Route path="people" getComponent={(location, cb) => {
      if (!__CLIENT__) {
        cb(null, require('./containers/PeopleContainer').default)
      }
      require.ensure([], require => {
        cb(null, require('./containers/PeopleContainer').default)
      })
    }}/>

    <Route path="*" getComponent={(location, cb) => {
      if (!__CLIENT__) {
        cb(null, require('./containers/NotFoundPage').default)
      } else {
        require.ensure([], require => {
          cb(null, require('./containers/NotFoundPage').default)
        })
      }
    }}/>

  </Route>
);

export default routes
