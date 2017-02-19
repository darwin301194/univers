import { CALL_API }  from '../middleware/api'

export const PEOPLE_REQUEST = 'PEOPLE_REQUEST'
export const PEOPLE_SUCCESS = 'PEOPLE_SUCCESS'
export const PEOPLE_FAILURE = 'PEOPLE_FAILURE'

const fetchPeople = () => ({
  [CALL_API]: {
    types: [PEOPLE_REQUEST, PEOPLE_SUCCESS, PEOPLE_FAILURE],
    endpoint: `people/`
  }
})

export const loadPeople = () => dispatch =>
  dispatch(fetchPeople())

export const loadPeopleIfNeeded = () => (dispatch, getState) =>
  getState().people ? dispatch(fetchPeople()) : void(0)
