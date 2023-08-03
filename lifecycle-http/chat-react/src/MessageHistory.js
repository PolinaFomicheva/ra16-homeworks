import React from "react";
import Message from "./Message";
import Response from "./Response";
import PropTypes from "prop-types";

export default function MessageHistory({ list }) {
  return (
    <ul>
      {list.map((item) => {
        return item.userID === localStorage.userID ? (
          <Response key={item.id} message={item.content} />
        ) : item.userID === localStorage.guestID ? (
          <Message key={item.id} message={item.content} />
        ) : null;
      })}
    </ul>
  );
}

Response.propTypes = {
  list: PropTypes.array,
};

MessageHistory.defaultProps = { items: [] };

