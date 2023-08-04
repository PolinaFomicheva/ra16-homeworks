import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditPost() {
  let [text, setText] = useState(undefined);
  let { id } = useParams();
  let nav = useNavigate();

  useEffect(() => {
    async function fetchData() {
      await fetch("http://localhost:7777/posts")
        .then((response) => response.json())
        .then((data) => {
          let response = data.find((item) => {
            return item.id === +id;
          });
          setText(response.content);
        });
    }
    fetchData();
  }, []);

  async function savePost(e) {
    e.preventDefault();

    let data = {
      id: +id,
      content: document.querySelector(".post-text").value,
    };

    await fetch("http://localhost:7777/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charser=utf-8",
      },
      body: JSON.stringify(data),
    });
    setText(data.content);
    nav(`/posts/${id}`);
  }
  return (
    <>
      <div className="edit-field">
        Editing post
        <button className="post-create-close" onClick={() => nav("/")}>
          X
        </button>
      </div>

      <div className="post">
        <div className="post-author">
          <img
            className="post-avatar"
            src="https://i1.sndcdn.com/avatars-000495007683-zg65ko-t500x500.jpg"
          />
          <p className="post-author-name">Anonym</p>
        </div>
        <div className="post-main">
          <form>
            <div className="post-content">
              <textarea className="post-text" defaultValue={text}></textarea>
            </div>
            <div className="post-footer">
              <div className="post-react-buttons">
                <button className="post-save-button" onClick={savePost}>
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
