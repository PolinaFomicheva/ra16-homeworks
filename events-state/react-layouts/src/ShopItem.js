import React from 'react';

function ShopItem(props) {
  const { item } = props;
  const currency = '$';

  return (
    <li className='shop-item'>
      <img className='shop-item-image' src={item.img} alt='' />
      <h1 className='shop-item-title'>{item.name}</h1>
      <p className='shop-item-color'>{item.color}</p>
      <span className='shop-item-price'>
        {currency}
        {item.price}
      </span>
      <button className='shop-item-btn'>Add to Cart</button>
    </li>
  ); 
}

export default ShopItem;
