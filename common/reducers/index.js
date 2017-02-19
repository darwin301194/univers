import { combineReducers } from 'redux'
import menu from './menu'
import people from './people'

const rootReducer = combineReducers({
  menu,
  people
})

export default rootReducer
