import React from 'react';
import renderGoodItem from '../goodItem/goodItem';
import './goods-list.css';

const GoodsList = (goods) => {
  return (    
    <div>
      <h3>Here is your list</h3>
      <ul className="goods-list row">
        { goods.map((good) => renderGoodItem(good)) }        
      </ul>
    </div>
  );
};

export default GoodsList;