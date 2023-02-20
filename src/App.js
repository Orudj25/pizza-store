import React from "react";
import "./scss/app.scss";
import Header from "./components/Header/Header";
import Categories from "./components/Categories/Categories";
import ReactDOM from "react-dom";
import Sort from "./components/Sort/Sort";
import PizzaBlock from "./components/PizzaBlock/PizzaBlock";
import pizzas from "./assets/pizzas-db/pizzas.json";

console.log(pizzas);
function App() {
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
            {pizzas.map((object) => (
              <PizzaBlock
                image={object.imageUrl}
                name={object.name}
                price={object.price}
                dims={object.dims}
                types={object.types}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
