import React from "react";
import axios from "axios";

import { useEffect, useState, useContext } from "react";

import { useSelector, useDispatch } from "react-redux";

import Categories from "../components/Categories/Categories";
import Sort from "../components/Sort/Sort";
import Skeleton from "../components/PizzaBlock/Skeleton";
import Index from "../components/PizzaBlock";
import Pagination from "../components/Pagination";

import { SearchContext } from "../App";

import { setCategoryId } from "../redux/slice/filterSlice";

const Home = () => {
  const dispatch = useDispatch();
  const categoryId = useSelector((state) => state.filter.categoryId);
  const sortType = useSelector((state) => state.filter.sort.sortProperty);

  const { searchValue } = useContext(SearchContext);
  const [items, setItems] = useState([]);
  const [isLoading, SetIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    SetIsLoading(true);

    const sortBy = sortType.replace("-", "");
    const order = sortType.includes("-") ? "asc" : "desc";
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    axios
      .get(
        `https://63f6062e9daf59d1ad8049b9.mockapi.io/items?page=${currentPage}&sortBy=${sortBy}&limit=4&${category}&order=${order}${search}`
      )
      .then((res) => {
        setItems(res.data);
        SetIsLoading(false);
      });
  }, [categoryId, sortType, searchValue, currentPage]);

  const pizzas = items.map((object) => <Index key={object.id} {...object} />);

  const skeletons = [...new Array(6)].map((_, index) => (
    <Skeleton key={index} />
  ));

  const onClickCategory = (index) => {
    dispatch(setCategoryId(index));
  };

  return (
    <div className="container">
      <div className="content__top">
        <Categories
          value={categoryId}
          onClickCategory={(index) => onClickCategory(index)}
        />
        <Sort value={sortType} onChangeSort={(index) => sortType(index)} />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
    </div>
  );
};

export default Home;
