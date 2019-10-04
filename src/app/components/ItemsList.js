import React from 'react'
import PropTypes from 'prop-types'
import { get } from 'lodash'

import { tabsToFields } from '../../utils'
import { Item, LoadingIndicator } from './'

const ItemsList = React.memo(({items = [], activeTab}) => (
  <table className="items-table">
    <thead className="items-table-head">
      <tr>
        {
          tabsToFields[activeTab].map(({ label }) =>
            (<th key={label} className="items-table-head-element">{label}</th>))
        }
      </tr>
    </thead>
    <tbody className="items-table-body">
      { items.map((item, idx) => (<Item key={idx} item={item} />)) }
    </tbody>
  </table>
))

ItemsList.propTypes = {
  items: PropTypes.array.isRequired,
  activeTab: PropTypes.string.isRequired,
};


export default ItemsList
