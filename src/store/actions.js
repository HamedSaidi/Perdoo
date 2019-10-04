import fetch from 'cross-fetch'
import * as actionsNames from './actionNames'
import { parseItems } from '../helpers'

const URL = 'http://127.0.0.1:8000'

const setItems = (items) => ({
  type: actionsNames.SET_ITEMS,
  items
})

export const setPaginations = (pagination) => ({
  type: actionsNames.SET_PAGINATION,
  pagination
})

export const setActiveTab = (activeTab) => ({
  type: actionsNames.SET_ACTIVE_TAB,
  activeTab
})

export const switchTab = (activeTab) => {
  return (dispatch) => {
    dispatch(setActiveTab(activeTab))
    dispatch(loadItems())
  }
}

export const setLoading = (loading) => ({
  type: actionsNames.SET_LOADING,
  loading
})

export const loadItems = ({per = 10, page = 1} = {per: 10, page: 1}) => {
  return (dispatch, getState) => {
    const { activeTab } = getState()
    dispatch(setItems([]))
    dispatch(setLoading(true))
    return fetch(`${URL}/${activeTab}?page[${page}]&page[${per}]`, {mode: 'no-cors'})
      .then(result => result.json())
      .then(({ data, meta: { pagination }}) => {
        const items = parseItems(data, activeTab)
        dispatch(setItems(items))
        dispatch(setLoading(false))
        dispatch(setPaginations({...pagination, per}))
      })
    }
}
