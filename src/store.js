/* eslint-disable no-underscore-dangle */
import {createStore, combineReducers, compose} from 'redux'
import {reducer as formReducer} from 'redux-form'

const rootReducer = combineReducers({
  form: formReducer,
})

const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({shouldHotReload: false})
    : compose

const store = createStore(rootReducer, composeEnhancers())

export default store
