import React from "react";
import { useEffect, useState } from "react";

import Categories from "../components/Categories/Categories";
import Sort from "../components/Sort/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Index from "../components/PizzaBlock";

const Home = () => {
  const [items, setItems] = useState([]);
  const [isLoading, SetIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://63f6062e9daf59d1ad8049b9.mockapi.io/items")
      .then((res) => res.json())
      .then((json) => setItems(json));
    SetIsLoading(false);
  }, []);

  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((object) => <Index key={object.id} {...object} />)}
      </div>
    </>
  );
};

export default Home;
