import React from 'react'
import { FaTrashAlt } from 'react-icons/fa'

const LineItem = ({item, updateData, deleteData}) => {
    return (
        <li>
            <input type="checkbox" checked={item.checked} onChange={() => updateData(item.id)}></input>
            <label>{item.name}</label>
            <FaTrashAlt onClick={() => deleteData(item.id)} role='button' tabIndex={0}></FaTrashAlt>
        </li>
    )
}

export default LineItem