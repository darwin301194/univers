import { STARSHIP_REQUEST,
  STARSHIP_SUCCESS,
  STARSHIP_FAILURE,
  SELECT_STARSHIP_PAGE
} from '../actions'

const starships = (state = {
  isFetching: false,
  totalCount: 0,
  starships: [],
  error: null
}, action) => {
  switch (action.type) {
    case STARSHIP_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })

    case STARSHIP_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        totalCount: action.response.count,
        starships: action.response.results,
        error: null
      })

    case STARSHIP_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        error: action.error.response.statusText
      })

    default: return state
  }
}

export const selectedStarshipsPage = (state = 1, action) => {
  switch (action.type) {
    case SELECT_STARSHIP_PAGE:
      return action.page
    default:
      return state
  }
}

export const starshipsByPage = (state = {}, action) => {
  switch (action.type) {
    case STARSHIP_REQUEST:
    case STARSHIP_SUCCESS:
    case STARSHIP_FAILURE:
      if (!action.page) return state
      return Object.assign({}, state, {
        [action.page]: starships(state[action.page], action)
      })
    default:
      return state
  }
}
