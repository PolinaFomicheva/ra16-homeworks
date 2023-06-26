import React from "react";
import Message from "./Message";
import Response from "./Response";
import Typing from "./Typing";


function MessageHistory({ list }) {

    // console.log(list.from.name)

    const messageItem = list.text !=  undefined ? (
        (list.type === "message" ?
              <Message from={list.from} message={list} />
              : list.type === "response" ?
                <Response from={list.from} message={list} />
                : list.type === "typing" ?
                  <Typing from={list.from} message={list} />
                  : null)
          
    ) : null

    return (
        <ul>
            {messageItem}
        </ul>
    )
}



export default MessageHistory

