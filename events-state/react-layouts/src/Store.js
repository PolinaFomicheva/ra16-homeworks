import React, { useState } from 'react';
import PropTypes from 'prop-types';

import IconSwitch from './IconSwitch';
import CardsView from './CardsView';
import ListView from './ListView';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewListIcon from '@mui/icons-material/ViewList';


function Store({ products }) {
//   const [products] = useState(data);
  const [view, setView] = useState('view_list');

  const onSwitch = (icon) => {
    icon === 'view_list' ? setView('view_module') : setView('view_list');
    console.log(icon);
  };

  return (
    <>
      <IconSwitch icon={view} onSwitch={onSwitch} />
      {view === 'view_list' ? (
        <CardsView cards={products} />
      ) : (
        <ListView items={products} />
      )}

    </>
  );
}


  Store.propTypes = {
    products: PropTypes.array,
    view: PropTypes.string,
    onSwitch: PropTypes.func,
  };
  

export default Store;