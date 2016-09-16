import React, { PropTypes } from 'react'

import ReactLoryItem from './react-lory-item'

export default function ReactLoryList ({className, classNameItem, currentSlide, items, lazyLoadConfig}) {
  const { enabled, itemsOnLoad, componentPlaceholder } = lazyLoadConfig
  const hasToLoadItem = (index) => {
    return !enabled ||
           (enabled && index < itemsOnLoad) ||
           (enabled && currentSlide + 1 >= index)
  }

  return (
    <ul className={className}>
      {items.map((item, index) => {
        const itemToRender = hasToLoadItem(index)
                             ? item
                             : <div key={index}>{componentPlaceholder}</div>
        return (<ReactLoryItem
          className={classNameItem}
          item={itemToRender}
          key={index} />
        )
      })}
    </ul>
  )
}

ReactLoryList.propTypes = {
  className: PropTypes.string,
  classNameItem: PropTypes.string,
  currentSlide: PropTypes.number,
  items: PropTypes.array,
  lazyLoadConfig: PropTypes.object
}
