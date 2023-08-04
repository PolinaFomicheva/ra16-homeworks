import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function PostView() {
  let [text, setText] = useState(undefined);
  let { id } = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    fetch(`http://localhost:7777/posts`)
      .then((data) => data.json())
      .then((data) => {
        let content = data.find((item) => {
          return item.id === +id;
        });
        setText(content.content);
      });
  }, [id]);

  let deletePost = () => {
    fetch(`http://localhost:7777/posts/${id}`, {
      method: "DELETE",
    });
    navigate("/");
  };

  let editPost = () => {
    navigate(`/posts/${id}/edit`)
  }

  return (
    <>
      <div className="post">
        <div className="post-author">
          <img
            className="post-avatar"
            src="https://i1.sndcdn.com/avatars-000495007683-zg65ko-t500x500.jpg"
          />
          <p className="post-author-name">Anonym</p>
        </div>
        <div className="post-main">
          <div className="post-content">
            <p className="post-text">{text}</p>
          </div>
          <div className="post-footer">
            <div className="post-react-buttons">
              <button className="post-edit-button" onClick={editPost}>Edit</button>
              <button className="post-delete-button" onClick={deletePost}>
                Delete
              </button>
            </div>
            <textarea
              className="comment-textarea"
              placeholder="Write comment..."
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
}
