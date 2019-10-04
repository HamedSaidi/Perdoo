import { combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import items from './items'
import pagination from './pagination'
import activeTab from './tab'
import isLoading from './loading'

export default (state) => createStore(
  combineReducers({items, pagination, activeTab, isLoading}),
  state,
  applyMiddleware(thunkMiddleware)
)
