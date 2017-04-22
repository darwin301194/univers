import { FILM_REQUEST,
  FILM_SUCCESS,
  FILM_FAILURE,
  SELECT_FILM_PAGE
} from '../actions'

const films = (state = {
  isFetching: false,
  totalCount: 0,
  films: [],
  error: null
}, action) => {
  switch (action.type) {
    case FILM_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })

    case FILM_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        totalCount: action.response.count,
        films: action.response.results,
        error: null
      })

    case FILM_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        error: action.error.response.statusText
      })

    default: return state
  }
}

export const selectedFilmsPage = (state = 1, action) => {
  switch (action.type) {
    case SELECT_FILM_PAGE:
      return action.page
    default:
      return state
  }
}

export const filmsByPage = (state = {}, action) => {
  switch (action.type) {
    case FILM_REQUEST:
    case FILM_SUCCESS:
    case FILM_FAILURE:
      if (!action.page) return state
      return Object.assign({}, state, {
        [action.page]: films(state[action.page], action)
      })
    default:
      return state
  }
}
