import React from 'react';

const GoodItem = (good) => {
  return (
    <li key={good.id}>{ good.name } - { good.price }</li>
  );
};

export default GoodItem;