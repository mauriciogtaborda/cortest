import { combineReducers } from 'redux'
import taskReducer from './taskReducer'
import visibilityFilter from './filterReducers'

const challengeApp = combineReducers({
  task: taskReducer,
  filters: visibilityFilter
})

export default challengeApp