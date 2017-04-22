import { combineReducers } from 'redux'
import menu from './menu'
import { peoplesByPage, selectedPeoplesPage } from './peoples'
import { planetsByPage, selectedPlanetsPage } from './planets'
import { filmsByPage, selectedFilmsPage } from './films'
import { speciesByPage, selectedSpeciesPage } from './species'
import { vehiclesByPage, selectedVehiclesPage } from './vehicles'
import { starshipsByPage, selectedStarshipsPage } from './starships'

const rootReducer = combineReducers({
  menu,
  peoplesByPage,
  selectedPeoplesPage,
  planetsByPage,
  selectedPlanetsPage,
  filmsByPage,
  selectedFilmsPage,
  speciesByPage,
  selectedSpeciesPage,
  vehiclesByPage,
  selectedVehiclesPage,
  starshipsByPage,
  selectedStarshipsPage
})

export default rootReducer
