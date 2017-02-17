'use strict'

// polyfill webpack require.ensure
if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

import React from 'react'
import { Route, IndexRoute } from 'react-router'

import Layout from './containers/Layout';

const routes = (
  <Route path="/" component={Layout}>
    <IndexRoute getComponent={(location, cb) => {
      require.ensure([], require => {
        cb(null, require('./containers/Home').default)
      })
    }}/>
    <Route path="about" getComponent={(location, cb) => {
      require.ensure([], require => {
        cb(null, require('./containers/About').default)
      })
    }}/>
    <Route path="*" getComponent={(location, cb) => {
      require.ensure([], require => {
        cb(null, require('./containers/NotFoundPage').default)
      })
    }}/>
  </Route>
);

export default routes
