import React from "react";
import PropTypes from "prop-types";

export default function Response({ message }) {
  return (
    <li>
      <div className='message-data'>
        <span className='message-data-name'>
          <i className='fa fa-circle online' /> Пользователь
        </span>
        <span className='message-data-time'>{message.time}</span>
      </div>
      <div className='message my-message'>{message}</div>
    </li>
  );
}

Response.propTypes = {
  message: PropTypes.string,
};
