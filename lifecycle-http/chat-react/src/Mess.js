import React from "react";
import PropTypes from "prop-types";

export default function Message({ message }) {
  return (
    <li className='clearfix'>
      <div className='message-data align-right'>
        <span className='message-data-name'>Гость</span>
        <i className='fa fa-circle me' />
      </div>
      <div className='message other-message float-right'>{message}</div>
    </li>
  );
}

Message.propTypes = {
  message: PropTypes.string,
};
