import React from 'react';

function ShopCard(props) {
  const { card } = props;
  const currency = '$';

  return (
    <li className='shop-card'>
      <h1 className='shop-card-title'>{card.name}</h1>
      <p className='shop-card-color'>{card.color}</p>
      <img className='shop-card-image' src={card.img} alt='' />
      <div className='shop-card-box'>
        <span className='shop-card-price'>{currency}{card.price}</span>
        <button className='shop-card-btn'>Add to Cart</button>
      </div>
    </li>
  ); 
}

export default ShopCard;
