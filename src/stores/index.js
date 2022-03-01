import { combineReducers, createStore } from 'redux'
import { searchReducer } from './SearchReducer'
import { citiesReducer } from './CitiesReducer'

const sotre = createStore(
  combineReducers({
    cities: citiesReducer,
    search: searchReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store