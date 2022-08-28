import React from "react";
import './App.scss';
import Product from "./Components/Product/Product";


function App() {

  return (
    <div className="App">
      <h1 className={'title'} >Каталог товаров</h1>
        <Product />
    </div>
  );

}

export default App;
