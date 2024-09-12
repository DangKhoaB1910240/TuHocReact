import React from 'react'
import LineItem from './LineItem'
const ItemList = ({items, updateData, deleteData}) => {
  return (
    <ul>
            {items.map((item) => (
                <LineItem
                    key={item.id}
                    item={item}
                    updateData={updateData}
                    deleteData={deleteData}
                />
            ))}
    </ul>
  )
}

export default ItemList