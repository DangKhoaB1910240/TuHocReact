import React from 'react'
import ItemList from './ItemList'
const Content = ({items, updateData, deleteData}) => {

    
  return (
    
    <>
        {items.length > 0 ? (
            <ItemList items={items} updateData={updateData} deleteData={deleteData}/>
        ) : "no never"}
        
    </>
  )
}

export default Content