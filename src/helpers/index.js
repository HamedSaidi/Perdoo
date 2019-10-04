import { tabsToFields } from '../utils'
import { get } from 'lodash'

export const parseItems = (data, tab) => {
  const fields = tabsToFields[tab]
  return data.map(item => {
    return fields.reduce((acc, cur) => {
      acc.push({
        label: cur.label,
        value: get(item, cur.path, '')
      })
      return acc
    }, [])
  })
}
