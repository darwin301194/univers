import { CALL_API }  from '../middleware/api'

export const PEOPLE_REQUEST = 'PEOPLE_REQUEST'
export const PEOPLE_SUCCESS = 'PEOPLE_SUCCESS'
export const PEOPLE_FAILURE = 'PEOPLE_FAILURE'

export const fetchPeople = (page) => ({
  [CALL_API]: {
    types: [PEOPLE_REQUEST, PEOPLE_SUCCESS, PEOPLE_FAILURE],
    endpoint: `people/`
  }
})

export const fetchPeopleIfNeeded = () => (dispatch, getState) => {
  Object.keys(getState().people).length ? void(0) : dispatch(fetchPeople())
}
