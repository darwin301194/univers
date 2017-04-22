import { PLANET_REQUEST,
  PLANET_SUCCESS,
  PLANET_FAILURE,
  SELECT_PLANET_PAGE
} from '../actions'

const planets = (state = {
  isFetching: false,
  totalCount: 0,
  planets: [],
  error: null
}, action) => {
  switch (action.type) {
    case PLANET_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })

    case PLANET_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        totalCount: action.response.count,
        planets: action.response.results,
        error: null
      })

    case PLANET_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        error: action.error.response.statusText
      })

    default: return state
  }
}

export const selectedPlanetsPage = (state = 1, action) => {
  switch (action.type) {
    case SELECT_PLANET_PAGE:
      return action.page
    default:
      return state
  }
}

export const planetsByPage = (state = {}, action) => {
  switch (action.type) {
    case PLANET_REQUEST:
    case PLANET_SUCCESS:
    case PLANET_FAILURE:
      if (!action.page) return state
      return Object.assign({}, state, {
        [action.page]: planets(state[action.page], action)
      })
    default:
      return state
  }
}
