import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { tabs } from '../utils'
import { loadItems, switchTab } from '../store/actions'

import { ItemsList, Paginator, Tabs, LoadingIndicator } from './components'
import { getActiveTabState, getItemsState, getPaginationState, getLoadingState} from './selectors'

class App extends React.PureComponent {
  constructor(props) {
    super(props)
    this.loadItems = this.loadItems.bind(this)
  }

  componentDidMount() {
    this.props.loadItems()
  }

  loadItems(page, per) {
    this.props.loadItems({page, per})
  }

  render() {
    const { pagination, activeTab, isLoading, switchTab } = this.props
    return (
      <>
        <Tabs tabs={tabs} activeTab={activeTab} goToTab={switchTab}/>
        <h1 className="header-title"> Items List </h1>
        <ItemsList {...this.props} />
        { isLoading ? <LoadingIndicator /> : null }
        <Paginator {...pagination} loadItems={this.loadItems} />
      </>
    )
  }
}

App.propTypes = {
  items: PropTypes.array.isRequired,
  pagination: PropTypes.object.isRequired,
  loadItems: PropTypes.func.isRequired,
  switchTab: PropTypes.func.isRequired,
}

const mapDispatchToProps = dispatch => ({
  switchTab: (tab) => dispatch(switchTab(tab)),
  loadItems: (pagination) => dispatch(loadItems(pagination)),
})

const mapStateToProps = state => ({
  items: getItemsState(state),
  activeTab: getActiveTabState(state),
  isLoading: getLoadingState(state),
  pagination: getPaginationState(state),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
