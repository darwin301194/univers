import { CALL_API }  from '../middleware/api'
import Schemas from '../middleware/schemas'

export const REQUEST = 'REQUEST'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'

const fetchList = () => ({
  [CALL_API]: {
    types: [REQUEST, SUCCESS, FAILURE],
    firstInitial: true
  }
})

export const loadList = () => (dispatch, getState) => {
  return dispatch(fetchList)
}
