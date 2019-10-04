import { SET_ACTIVE_TAB } from './actionNames'
import { tabs } from '../utils'
export const initialState = tabs[0]

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_TAB:
      return action.activeTab

    default:
      return state
  }
}
