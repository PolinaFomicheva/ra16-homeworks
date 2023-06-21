import React from 'react';
import ShopCard from './ShopCard';


function CardsView(props) {
  const { cards } = props;

  return (
    <ul className='card-view'>
      {cards.map((val, ind) => (
        <ShopCard key={ind} card={val} />
        ))}
        </ul>
      );
    }
    
    export default CardsView;