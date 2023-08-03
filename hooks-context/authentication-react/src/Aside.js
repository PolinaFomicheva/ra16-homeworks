import { React, useContext } from "react";
import AuthContext from "../context/AuthContext";
import NewsList from "./NewsList";

export default function Aside() {
  const { token } = useContext(AuthContext);
  return (
    <aside className='news-list'>
      {token ? (
        <NewsList />
      ) : (
        <div className='news-list-none'>
          <h3>Neto Social</h3>
          <h6>Facebook and VK killer</h6>
        </div>
      )}
    </aside>
  );
}
