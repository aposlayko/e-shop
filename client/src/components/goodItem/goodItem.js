import React from 'react';
import './goodItem.css';

const GoodItem = (good) => {  
  return (
    <li className="good-item col-xs-12 col-sm-6 col-md-4 col-lg-3" key={good.id}>{ good.name } - { good.price }</li>
  );
};

export default GoodItem;