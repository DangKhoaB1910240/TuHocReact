import React, { useState } from 'react'

const Content = () => {

    const [items, setItem] = useState([
        {
            id: 1,
            checked: true,
            name: "item1"
        },
        {
            id: 2,
            checked: true,
            name: "item2"
        },
        {
            id: 3,
            checked: false,
            name: "item3"
        }
    ])
    const deleteData = (id) => {
        const itemsNes = items.filter((item) => item.id !== id);
        setItem(itemsNes);
    }
  return (
    
    <main>
        <ul>
            {items.map((item) => (
                <li>
                    <input type="checkbox" checked={item.checked}></input>
                    <label>{item.name}</label>
                    <button onClick={() => deleteData(item.id)}>delete</button>
                </li>
            ))}
        </ul>
    </main>
  )
}

export default Content