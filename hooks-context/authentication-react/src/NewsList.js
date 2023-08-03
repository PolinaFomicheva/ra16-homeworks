import { React, useContext } from "react";
import useJsonFetch from "./useJsonFetch";
import AuthContext from "../context/AuthContext";
import NewsItem from "./NewsItem";
import useStorage from "./useStorage";

export default function NewsList() {
  const { token } = useContext(AuthContext);
  const Storage = (key, value) => useStorage(key, value);

  const [data, error, loading] = useJsonFetch(
    `${process.env.REACT_APP_AUTH_URL}private/news`,
    {
      method: "GET",
      headers: { Authorization: `Bearer ${token} ` },
    }
  );
  if (error) {
    Storage("tokenNeto", "delete");
    Storage("prrofileNeto", "delete");
  }
  return (
    <div className='news-block'>
      {loading && <p>Загрузка...</p>}
      {!loading &&
        data &&
        data.map((item) => <NewsItem key={item.id} news={item} />)}
    </div>
  );
}
