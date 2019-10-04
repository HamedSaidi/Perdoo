import React from 'react'
import PropTypes from 'prop-types'
import Tab from './Tab'

const Tabs = React.memo(({tabs, goToTab, activeTab}) => (
  <div className="tab">
    {
      tabs.map((label) => (<Tab key={label}
        isActive={activeTab === label}
        clickHandler={goToTab}
        label={label} />)
      )
    }
  </div>
))

Tabs.propTypes = {
  tabs: PropTypes.array.isRequired,
  activeTab: PropTypes.string.isRequired,
  goToTab: PropTypes.func.isRequired
}

export default Tabs
