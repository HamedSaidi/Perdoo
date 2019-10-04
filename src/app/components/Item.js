import React from 'react'
import PropTypes from 'prop-types'

const Item = React.memo(({item = []}) => {
  return (
    <tr>
      { item.map(({value, label}) => (<td key={label} className="items-table-element">{value}</td>)) }
    </tr>
  )
})

Item.propTypes = {
  item: PropTypes.array.isRequired,
}

export default Item
