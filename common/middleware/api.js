import { arrayOf, normalize } from 'normalizr'
import request from 'axios'
import Schemas from './schemas'

const API_ROOT = 'http://swapi.co/api/'

// Warning! This function mutates the object!
const camelizeKeys = json => {
  Object.keys(json).forEach(key => {
    var newKey = key.replace(/^[_.\- ]+/, '')
                  .toLowerCase()
                  .replace(/[_.\- ]+(\w|$)/g, (m, p1) => p1.toUpperCase())

    if (key !== newKey) {
      json[newKey] = json[key]
      delete json[key]
    }
  })
}

export const CALL_API = Symbol('Call API')

export const fetchMenu = () =>
  request.get(API_ROOT)
    .then(response => {
      if (response.status !== 200) {
        return Promise.reject({
          status: response.status,
          statusText: response.statusText
        })
      }

      return Promise.resolve(response.data)
    })
    .catch(err => Promise.reject({
      status: err.response.status,
      statusText: err.response.statusText
    }))

export default store => next => action => {
  const callAPI = action[CALL_API]

  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  let { endpoint } = callAPI
  const { schema, types } = callAPI

  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getState())
  }

  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL')
  }

  if (!schema) {
    throw new Error('Specify one of the exported Schemas.')
  }

  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.')
  }

  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.')
  }
}
