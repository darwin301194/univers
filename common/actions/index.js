import { CALL_API }  from '../middleware/api'

export const INVALIDATE_PEOPLE = 'INVALIDATE_PEOPLE'
export const SELECT_PEOPLE_PAGE = 'SELECT_PEOPLE_PAGE'
export const PEOPLE_REQUEST = 'PEOPLE_REQUEST'
export const PEOPLE_SUCCESS = 'PEOPLE_SUCCESS'
export const PEOPLE_FAILURE = 'PEOPLE_FAILURE'

export const SELECT_PLANET_PAGE = 'SELECT_PLANET_PAGE'
export const PLANET_REQUEST = 'PLANET_REQUEST'
export const PLANET_SUCCESS = 'PLANET_SUCCESS'
export const PLANET_FAILURE = 'PLANET_FAILURE'

export const SELECT_FILM_PAGE = 'SELECT_FILM_PAGE'
export const FILM_REQUEST = 'FILM_REQUEST'
export const FILM_SUCCESS = 'FILM_SUCCESS'
export const FILM_FAILURE = 'FILM_FAILURE'

export const SELECT_SPECIES_PAGE = 'SELECT_SPECIES_PAGE'
export const SPECIES_REQUEST = 'SPECIES_REQUEST'
export const SPECIES_SUCCESS = 'SPECIES_SUCCESS'
export const SPECIES_FAILURE = 'SPECIES_FAILURE'

export const SELECT_VEHICLE_PAGE = 'SELECT_VEHICLE_PAGE'
export const VEHICLE_REQUEST = 'VEHICLE_REQUEST'
export const VEHICLE_SUCCESS = 'VEHICLE_SUCCESS'
export const VEHICLE_FAILURE = 'VEHICLE_FAILURE'

export const SELECT_STARSHIP_PAGE = 'SELECT_STARSHIP_PAGE'
export const STARSHIP_REQUEST = 'STARSHIP_REQUEST'
export const STARSHIP_SUCCESS = 'STARSHIP_SUCCESS'
export const STARSHIP_FAILURE = 'STARSHIP_FAILURE'

// People
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

// Planet
export const selectedPlanetsPage = (page = 1) => ({
  type: SELECT_PLANET_PAGE,
  page
})

export const fetchPlanets = (page = 1) => ({
  [CALL_API]: {
    types: [PLANET_REQUEST, PLANET_SUCCESS, PLANET_FAILURE],
    endpoint: `planets/?page=${page}`,
    page
  }
})

const shouldFetchPlanets = (state, page) => {
  const planets = state.planetsByPage[page]
  if (!planets) return true
  if (planets.isFetching) return false
  return planets.didInvalidate
}

export const fetchPlanetsIfNeeded = (page = 1) =>
  (dispatch, getState) => {
    dispatch(selectedPlanetsPage(page))
    if (shouldFetchPlanets(getState(), page)) {
      dispatch(fetchPlanets(page))
    }
  }

// Film
export const selectedFilmsPage = (page = 1) => ({
  type: SELECT_FILM_PAGE,
  page
})

export const fetchFilms = (page = 1) => ({
  [CALL_API]: {
    types: [FILM_REQUEST, FILM_SUCCESS, FILM_FAILURE],
    endpoint: `films/?page=${page}`,
    page
  }
})

const shouldFetchFilms = (state, page) => {
  const films = state.filmsByPage[page]
  if (!films) return true
  if (films.isFetching) return false
  return films.didInvalidate
}

export const fetchFilmsIfNeeded = (page = 1) =>
  (dispatch, getState) => {
    console.log('dispatch gak si')
    dispatch(selectedFilmsPage(page))
    if (shouldFetchFilms(getState(), page)) {
      dispatch(fetchFilms(page))
    }
  }

// Species
  export const selectedSpeciesPage = (page = 1) => ({
    type: SELECT_SPECIES_PAGE,
    page
  })

  export const fetchSpecies = (page = 1) => ({
    [CALL_API]: {
      types: [SPECIES_REQUEST, SPECIES_SUCCESS, SPECIES_FAILURE],
      endpoint: `species/?page=${page}`,
      page
    }
  })

  const shouldFetchSpecies = (state, page) => {
    const species = state.speciesByPage[page]
    if (!species) return true
    if (species.isFetching) return false
    return species.didInvalidate
  }

  export const fetchSpeciesIfNeeded = (page = 1) =>
    (dispatch, getState) => {
      dispatch(selectedSpeciesPage(page))
      if (shouldFetchSpecies(getState(), page)) {
        dispatch(fetchSpecies(page))
      }
    }

// Vehicle
export const selectedVehiclesPage = (page = 1) => ({
  type: SELECT_VEHICLE_PAGE,
  page
})

export const fetchVehicles = (page = 1) => ({
  [CALL_API]: {
    types: [VEHICLE_REQUEST, VEHICLE_SUCCESS, VEHICLE_FAILURE],
    endpoint: `vehicles/?page=${page}`,
    page
  }
})

const shouldFetchVehicles = (state, page) => {
  const vehicles = state.vehiclesByPage[page]
  if (!vehicles) return true
  if (vehicles.isFetching) return false
  return vehicles.didInvalidate
}

export const fetchVehiclesIfNeeded = (page = 1) =>
  (dispatch, getState) => {
    dispatch(selectedVehiclesPage(page))
    if (shouldFetchVehicles(getState(), page)) {
      dispatch(fetchVehicles(page))
    }
  }

  // Starship
  export const selectedStarshipsPage = (page = 1) => ({
    type: SELECT_STARSHIP_PAGE,
    page
  })

  export const fetchStarships = (page = 1) => ({
    [CALL_API]: {
      types: [STARSHIP_REQUEST, STARSHIP_SUCCESS, STARSHIP_FAILURE],
      endpoint: `starships/?page=${page}`,
      page
    }
  })

  const shouldFetchStarships = (state, page) => {
    const starships = state.starshipsByPage[page]
    if (!starships) return true
    if (starships.isFetching) return false
    return starships.didInvalidate
  }

  export const fetchStarshipsIfNeeded = (page = 1) =>
    (dispatch, getState) => {
      dispatch(selectedStarshipsPage(page))
      if (shouldFetchStarships(getState(), page)) {
        dispatch(fetchStarships(page))
      }
    }
