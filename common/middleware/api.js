import request from 'axios'

const API_ROOT = 'http://swapi.co/api/'

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

const callApi = (endpoint, schema) => {
  const fullUrl = (endpoint.indexOf(API_ROOT) === -1 ? API_ROOT + endpoint : endpoint)
  console.info(fullUrl)

  return request.get(fullUrl)
    .then(response => Promise.resolve(response))
    .catch(err => Promise.reject(err))
}

export default store => next => action => {
  const callAPI = action[CALL_API]

  if (typeof callAPI === 'undefined') {
    return next(action)
  }

  let { endpoint } = callAPI
  const { types, page } = callAPI

  if (typeof endpoint === 'function') {
    endpoint = endpoint(store.getState())
  }

  if (typeof endpoint !== 'string') {
    throw new Error('Specify a string endpoint URL')
  }

  if (!Array.isArray(types) || types.length !== 3) {
    throw new Error('Expected an array of three action types.')
  }

  if (!types.every(type => typeof type === 'string')) {
    throw new Error('Expected action types to be strings.')
  }

  const actionWith = data => {
    const finalAction = Object.assign({}, action, data)
    delete finalAction[CALL_API]
    return finalAction
  }

  const [requestType, successType, failureType] = types
  next(actionWith({ type: requestType }))

  return callApi(endpoint)
    .then(
      response =>
        next(actionWith({
          type: successType,
          page: page,
          response: response.data
        })),
      err =>
        next(actionWith({
          type: failureType,
          page: page,
          error: err || 'Something bad happened'
        }))
    )
}
