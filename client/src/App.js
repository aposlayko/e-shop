import React from 'react';
import renderGoodsList from './components/goodsList/goods-list';
import data from './data-mocks.js';
import './App.css';
import 'flexboxgrid/dist/flexboxgrid.css';

const App = () => {
  const goodsList = renderGoodsList(data.goods);
  
  return (
    <div>
      <h2>Welcome to Eshop</h2>
      { goodsList }      
    </div>
  );
};

export default App;
