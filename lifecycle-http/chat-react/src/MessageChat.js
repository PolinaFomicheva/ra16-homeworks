import React, { createRef } from "react";
import MessageHistory from "./MessageHistory";
import MessageForm from "./MessageForm";
import BlockUi from "react-block-ui";

export default class MessageChat extends React.Component {
  constructor(props) {
    super(props);
    this.state = { notes: [], load: true };
    this.messegeIndex = 0;
    this.ref = createRef();
    this.scrollChat = true;
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.getRequest(`${this.url}?from=${this.messegeIndex}`),
      5 * 1000
    );
  }

  url = "http://localhost:7777/messages";

  getRequest = (url) => {
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        this.setState({
          notes: [...result],
        });
        this.setState({ load: false });
      });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.notes.length !== this.state.notes.length) {
      const chatHistory = this.ref.current;
      chatHistory.scrollTop =
        chatHistory.scrollHeight - chatHistory.clientHeight;
      this.scrollChat = false;
    }
  }

  setRequest = (body) => {
    fetch(this.url, {
      method: "POST",
      body: JSON.stringify(body),
    }).then(this.setState({ load: true }));
    this.scrollChat = true;
  };

  render() {
    return (
      <BlockUi tag='div' blocking={this.state.load} className='blockLoad'>
        <div className='clearfix container'>
          <div className='chat'>
            <div className='chat-history' ref={this.ref}>
              <MessageHistory list={this.state.notes} />
            </div>
            <MessageForm setRequest={this.setRequest} />
          </div>{" "}
        </div>
      </BlockUi>
    );
  }
}
