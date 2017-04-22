import { SPECIES_REQUEST,
  SPECIES_SUCCESS,
  SPECIES_FAILURE,
  SELECT_SPECIES_PAGE
} from '../actions'

const species = (state = {
  isFetching: false,
  totalCount: 0,
  species: [],
  error: null
}, action) => {
  switch (action.type) {
    case SPECIES_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })

    case SPECIES_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        totalCount: action.response.count,
        species: action.response.results,
        error: null
      })

    case SPECIES_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        error: action.error.response.statusText
      })

    default: return state
  }
}

export const selectedSpeciesPage = (state = 1, action) => {
  switch (action.type) {
    case SELECT_SPECIES_PAGE:
      return action.page
    default:
      return state
  }
}

export const speciesByPage = (state = {}, action) => {
  switch (action.type) {
    case SPECIES_REQUEST:
    case SPECIES_SUCCESS:
    case SPECIES_FAILURE:
      if (!action.page) return state
      return Object.assign({}, state, {
        [action.page]: species(state[action.page], action)
      })
    default:
      return state
  }
}
