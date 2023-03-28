import "./scss/app.scss";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";

import { Routes, Route } from "react-router-dom";
import { useState, createContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "./redux/slices/filterSlice";

export const SearchContext = createContext("");

function App() {
  const [searchValue, setSearchValue] = useState("");
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="wrapper">
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>

      {/*<SearchContext.Provider value={{ searchValue, setSearchValue }}>*/}
      {/*  <Header />*/}
      {/*  <div className="content">*/}
      {/*    <Routes>*/}
      {/*      <Route path="/" element={<Home />} />*/}
      {/*      <Route path="/cart.html" element={<Cart />} />*/}
      {/*      <Route path="*" element={<NotFound />} />*/}
      {/*    </Routes>*/}
      {/*  </div>*/}
      {/*</SearchContext.Provider>*/}
    </div>
  );
}

export default App;
