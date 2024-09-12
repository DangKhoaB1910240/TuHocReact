import React, { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
const Content = () => {
  const [items, setItem] = useState([
    {
      id: 1,
      checked: true,
      name: "item1",
    },
    {
      id: 2,
      checked: true,
      name: "item2",
    },
    {
      id: 3,
      checked: false,
      name: "item3",
    },
  ]);
  const deleteData = (id) => {
    const itemsNes = items.filter((item) => item.id !== id);
    setItem(itemsNes);
  };
  const updateData = (id) => {
    const item = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItem(item);
  };
  return (
    <main>
      {items.length > 0 ? (
        <ul>
          {items.map((item) => (
            <li>
              <input
                type="checkbox"
                checked={item.checked}
                onChange={() => updateData(item.id)}
              ></input>
              <label>{item.name}</label>
              <FaTrashAlt
                onClick={() => deleteData(item.id)}
                role="button"
                tabIndex={0}
              ></FaTrashAlt>
            </li>
          ))}
          2.1 Content
        </ul>
      ) : (
        "no never"
      )}
    </main>
  );
};

export default Content;
