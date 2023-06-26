import React from "react";

function Typing(props) {
  
    return (
      <li className="li-item">
        <div class="message-data align-left">
          <span class="message-data-name"><i class="fa fa-circle online"></i> {props.from.name}</span>
          <span class="message-data-time">{props.message.time}</span>
          <i class="fa fa-circle online"></i>
        </div>
        <div class="typing">
          <i class="fa fa-circle online">o</i>
          <i class="fa fa-circle online">o</i>
          <i class="fa fa-circle online">o</i>
        </div>
      </li>
    );
  }
  
  export default Typing;
  