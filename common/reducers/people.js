import { PEOPLE_REQUEST, PEOPLE_SUCCESS, PEOPLE_FAILURE } from '../actions'

const people = (state = {}, action) => {
  switch (action.type) {
    case PEOPLE_REQUEST:
      return state

    case PEOPLE_SUCCESS:
      return Object.assign({}, state, {
        data: action.response.results
      })

    case PEOPLE_FAILURE:
      return state

    default: return state
  }
}

export default people
