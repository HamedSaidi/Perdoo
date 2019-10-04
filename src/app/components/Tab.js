import React from 'react'
import PropTypes from 'prop-types'

const Tab = React.memo(({label, clickHandler, isActive}) => (
  <button className={`tablinks${isActive ? ' active' : ''}`} onClick={() => {clickHandler(label)}}>{label}</button>
))

Tab.propTypes = {
  isActive: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired
}

export default Tab
