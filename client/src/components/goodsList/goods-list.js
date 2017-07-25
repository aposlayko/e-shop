import React from 'react';
import renderGoodItem from '../goodItem/goodItem';

const GoodsList = (goods) => {
  return (    
    <div>
      <h3>Here is your list</h3>
      <ul>
        { goods.map((good) => renderGoodItem(good)) }
      </ul>
    </div>
  );
};

export default GoodsList;