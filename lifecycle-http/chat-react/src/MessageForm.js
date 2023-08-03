import { React, useState } from "react";
import shortid from "shortid";

function identification(state) {
  if (state === "User") {
    if (!localStorage.userID) localStorage.setItem("userID", shortid());
    return localStorage.userID;
  } else {
    if (localStorage.guestID) localStorage.setItem("guestID", shortid());
    return localStorage.guestID;
  }
}

export default function MessageForm({ setRequest }) {
  const [content, setForm] = useState("");
  const [radioButton, setRadioBtn] = useState("User");

  const handleChange = (event) => {
    let { value } = event.target;
    setForm(value);
  };

  const btnChange = (event) => {
    event.preventDefault();
    setRequest({ userID: identification(radioButton), content: content });
    setForm("");
  };

  const radioChange = (event) => {
    setRadioBtn(event.target.value);
  };

  return (
    <form className='message-form'>
      <textarea
        value={content}
        onChange={handleChange}
        className='message-area'
      />
      <button className='btnForm material-icons' onClick={btnChange}>
        chevron_right
      </button>
      <div className='identification'>
        <span>Представьтесть</span>
        <label>
          <span>Пользователь</span>
          <input
            type='radio'
            defaultValue='User'
            checked={radioButton === "User" ? true : false}
            onChange={radioChange}
          />
        </label>
        <label>
          <span>Гость</span>
          <input
            type='radio'
            defaultValue='Guest'
            checked={radioButton === "Guest" ? true : false}
            onChange={radioChange}
          />
        </label>
      </div>
    </form>
  );
  }