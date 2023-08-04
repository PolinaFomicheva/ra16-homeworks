import { useNavigate } from "react-router-dom";

export default function New() {
  let nav = useNavigate();
  let post = function (e) {
    e.preventDefault();
    let data = {
      id: 0,
      content: document.querySelector(".post-text").value,
    };
    fetch("http://localhost:7777/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charser=utf-8",
      },
      body: JSON.stringify(data),
    });
    nav('/')
  };


  return (
    <>
      <div className="post-create">
        <p>Creating post</p>
        <button className="post-create-close" onClick={() => nav('/')}>X</button>
        <form name="postForm">
          <textarea className="post-text" placeholder="Enter text..."></textarea>
          <button type="submit" className="publish-post-button" onClick={post}>
            Publish post
          </button>
        </form>
      </div>
    </>
  );
}
