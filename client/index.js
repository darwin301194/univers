'use strict'

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, match, browserHistory as history } from 'react-router'

import configureStore from '../common/configureStore'
import routes from '../common/routes'

const preloadedState = window.__PRELOADED_STATE__

// remove the script
// document.getElementById('preloaded-state').remove()
const store = configureStore(preloadedState)

match({ history, routes }, (err, redirectLocation, renderProps) => {
  render(
    <Provider store={store}>
      <Router {...renderProps} />
    </Provider>,
    document.getElementById('app')
  )
})
