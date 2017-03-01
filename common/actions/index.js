import { CALL_API }  from '../middleware/api'

export const INVALIDATE_PEOPLE = 'INVALIDATE_PEOPLE'
export const SELECT_PEOPLE_PAGE = 'SELECT_PEOPLE_PAGE'
export const PEOPLE_REQUEST = 'PEOPLE_REQUEST'
export const PEOPLE_SUCCESS = 'PEOPLE_SUCCESS'
export const PEOPLE_FAILURE = 'PEOPLE_FAILURE'

export const selectedPeoplesPage = (page = 1) => ({
  type: SELECT_PEOPLE_PAGE,
  page
})

export const fetchPeoples = (page = 1) => ({
  [CALL_API]: {
    types: [PEOPLE_REQUEST, PEOPLE_SUCCESS, PEOPLE_FAILURE],
    endpoint: `people/?page=${page}`,
    page
  }
})

const shouldFetchPeoples = (state, page) => {
  const peoples = state.peoplesByPage[page]
  if (!peoples) return true
  if (peoples.isFetching) return false
  return peoples.didInvalidate
}

export const fetchPeoplesIfNeeded = (page = 1) =>
  (dispatch, getState) => {
    dispatch(selectedPeoplesPage(page))
    if (shouldFetchPeoples(getState(), page)) {
      dispatch(fetchPeoples(page))
    }
  }
