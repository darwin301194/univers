import { PEOPLE_REQUEST,
  PEOPLE_SUCCESS,
  PEOPLE_FAILURE,
  INVALIDATE_PEOPLE,
  SELECT_PEOPLE_PAGE
} from '../actions'

const peoples = (state = {
  isFetching: false,
  didInvalidate: false,
  totalCount: 0,
  peoples: [],
  error: null
}, action) => {
  switch (action.type) {
    case INVALIDATE_PEOPLE:
      return Object.assign({}, state, {
        didInvalidate: true
      })

    case PEOPLE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })

    case PEOPLE_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        totalCount: action.response.count,
        peoples: action.response.results,
        error: null
      })

    case PEOPLE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        error: action.error.response.statusText
      })

    default: return state
  }
}

export const selectedPeoplesPage = (state = 1, action) => {
  switch (action.type) {
    case SELECT_PEOPLE_PAGE:
      return action.page
    default:
      return state
  }
}

export const peoplesByPage = (state = {}, action) => {
  switch (action.type) {
    case INVALIDATE_PEOPLE:
    case PEOPLE_REQUEST:
    case PEOPLE_SUCCESS:
    case PEOPLE_FAILURE:
      if (!action.page) return state
      return Object.assign({}, state, {
        [action.page]: peoples(state[action.page], action)
      })
    default:
      return state
  }
}
