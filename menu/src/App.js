
import React, { useState } from "react";
import Categories from "./Categories";
import Menu from "./Menu";
import data from './data';

const allCategories = ['all', ...new Set(data.map((item) => item.category))];
console.log(allCategories);

function App() {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState(allCategories);
  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(data);
      return;
    }
    const newItem = data.filter((item) =>
      item.category === category
    )
    setMenuItems(newItem);
  }
  return (
    <main>
      <section>
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>

        <Categories categories={categories} filterItems={filterItems} />

        <div className="menu-container">
          {
            menuItems.map((item) => {
              return <Menu key={item.id} {...item} />
            })
          }
        </div>
      </section>
    </main>
  );
}

export default App;
