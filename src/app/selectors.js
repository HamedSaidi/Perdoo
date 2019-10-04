import { createSelector } from 'reselect'

// list page selectors
const getActiveTab = (state) => state

export const getActiveTabState = createSelector(
  [ getActiveTab ],
  (state) => state.activeTab
)

const getItems = (state) => state

export const getItemsState = createSelector(
  [ getItems ],
  (state) => state.items
)

const getPagination = (state) => state

export const getPaginationState = createSelector(
  [ getPagination ],
  (state) => state.pagination
)

const getLoading = (state) => state

export const getLoadingState = createSelector(
  [ getLoading ],
  (state) => state.isLoading
)
