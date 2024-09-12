import React, { useRef } from 'react'
import {FaPlus} from 'react-icons/fa';
const AddItem = ({newItem, setNewItem,submitted }) => {
    const inputRef = useRef();
  return (
    <form className='addItem' onSubmit={submitted}>
        <input 
            autoFocus
            ref={inputRef}
            id="addItem"
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            placeholder='Add Item' required
        />
        <button type="submit" onClick={() => inputRef.current.focus()}>
            <FaPlus />
        </button>
    </form>
  )
}

export default AddItem