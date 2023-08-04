import Post from "./Post";
import { useState, useEffect } from "react";


export default function Home() {
  let [list, setList] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      await fetch("http://localhost:7777/posts")
        .then((response) => response.json())
        .then((data) => {
          setList(data);
          setLoading(false);
        });
    };
    fetchData();
  }, [loading]);

  return (
    <>
      {loading && <p>Loading</p>}
      <div className="posts">
        {list
          .map((item) => <Post key={item.id} id={item.id} data={item}></Post>)
          .reverse()}
      </div>
    </>
  );
}
