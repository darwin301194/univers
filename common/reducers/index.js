import { combineReducers } from 'redux'
import menu from './menu'
import { peoplesByPage, selectedPeoplesPage } from './peoples'

const rootReducer = combineReducers({
  menu,
  peoplesByPage,
  selectedPeoplesPage
})

export default rootReducer
