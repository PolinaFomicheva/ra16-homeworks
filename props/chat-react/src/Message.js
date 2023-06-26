import React from "react";

function Message(props) {
  
    return (
      <li className="li-item">
        <div className="message-data align-left">
          <span className="message-data-name"><i className="fa fa-circle online"></i> {props.from.name}</span>
          <span className="message-data-time">{props.message.time}</span>
        </div>
        <div className="message my-message">
          {props.message.text}
        </div>
      </li>
    );
  }
  
  export default Message;