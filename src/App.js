import React, { useEffect, useState } from "react";
import "./scss/app.scss";
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
import Sort from "./components/Sort/Sort";
import Index from "./components/PizzaBlock";
import Skeleton from "./components/PizzaBlock/Skeleton";

function App() {
  const [items, setItems] = useState([]);
  const [loading, isLoading] = useState(false);

  useEffect(() => {
    fetch("https://63f6062e9daf59d1ad8049b9.mockapi.io/items").then((res) =>
      res.json().then((json) => setItems(json))
    );
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {items.map((object) => (
              <Skeleton {...object} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
