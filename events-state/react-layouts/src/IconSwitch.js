import React from 'react';
import PropTypes from 'prop-types';

function IconSwitch({ icon, onSwitch }) {
  return (
    <div className='icon-box'>
      <span className='material-icons icon' onClick={() => onSwitch(icon)}>
        {icon}
      </span>
    </div>
  );
}

IconSwitch.propTypes = {
  icon: PropTypes.string,
  onSwitch: PropTypes.func,
};

export default IconSwitch;