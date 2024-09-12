import Header from "./Header.js";
import Content from "./Content.js";
import Footer from "./Footer.js";
import { useEffect, useState } from "react";
import AddItem from "./AddItem.js";
import SearchItem from "./SearchItem.js";
import apiRequest from "./apiRequest.js";
function App() {
  const API_URL = "http://localhost:3500/items";
  const [items, setItem] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Không lấy được dữ liệu r");
        const data = await response.json();
        setItem(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    setTimeout(() => {
      fetchItems();
    }, 2000);
  }, []);
  const addItem = async (name) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const newItem = { id, checked: false, name };
    const newItems = [...items, newItem];
    setItem(newItems);

    const object = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newItem),
    };
    const result = await apiRequest(API_URL, object);
    if (result) setError(result);
  };
  const deleteData = async (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItem(newItems);
    const object = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const result = await apiRequest(API_URL + `/${id}`, object);
    if (result) setError(result);
  };
  const updateData = async (id) => {
    const newItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItem(newItems);
    const filterItem = newItems.filter((item) => item.id === id);
    const object = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ checked: filterItem[0].checked }),
    };
    const result = await apiRequest(API_URL + `/${id}`, object);
    if (result) setError(result);
  };
  const submitted = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);

    setNewItem("");
  };
  return (
    //Khoa1
    <div className="App">
      <header className="App-header">
        <Header title="Tiêu đề nè" />
        <SearchItem searchValue={searchValue} setSearchValue={setSearchValue} />
        <AddItem
          newItem={newItem}
          setNewItem={setNewItem}
          submitted={submitted}
        />
        <main>
          {error && <p>{error}</p>}
          {isLoading && <p>loading...........</p>}
          {!error && !isLoading && (
            <Content
              items={items.filter((item) =>
                item.name.toLowerCase().includes(searchValue.toLowerCase())
              )}
              updateData={updateData}
              deleteData={deleteData}
            />
          )}
        </main>

        <Footer length={items.length} />
      </header>
    </div>
  );
}

export default App;
