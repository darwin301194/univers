import { VEHICLE_REQUEST,
  VEHICLE_SUCCESS,
  VEHICLE_FAILURE,
  SELECT_VEHICLE_PAGE
} from '../actions'

const vehicles = (state = {
  isFetching: false,
  totalCount: 0,
  vehicles: [],
  error: null
}, action) => {
  switch (action.type) {
    case VEHICLE_REQUEST:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })

    case VEHICLE_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        totalCount: action.response.count,
        vehicles: action.response.results,
        error: null
      })

    case VEHICLE_FAILURE:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        error: action.error.response.statusText
      })

    default: return state
  }
}

export const selectedVehiclesPage = (state = 1, action) => {
  switch (action.type) {
    case SELECT_VEHICLE_PAGE:
      return action.page
    default:
      return state
  }
}

export const vehiclesByPage = (state = {}, action) => {
  switch (action.type) {
    case VEHICLE_REQUEST:
    case VEHICLE_SUCCESS:
    case VEHICLE_FAILURE:
      if (!action.page) return state
      return Object.assign({}, state, {
        [action.page]: vehicles(state[action.page], action)
      })
    default:
      return state
  }
}
