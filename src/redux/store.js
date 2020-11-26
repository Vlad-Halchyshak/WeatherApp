import {combineReducers, createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {WeatherReducer} from './weatherRcer'

const reducers = combineReducers({
   weather: WeatherReducer
})
const store = createStore(reducers, applyMiddleware(thunk))

export default store