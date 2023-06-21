import React from 'react'
import ShopItem from './ShopItem'


function ListView(props) {
  const { items } = props;

  return (
    <ul className='list-view'>
      {items.map((val, ind) => (
        <ShopItem key={ind} item={val} />
      ))}
    </ul>
  );
}

export default ListView