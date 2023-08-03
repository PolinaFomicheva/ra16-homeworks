import { React, useState } from "react";
import AuthContext from "../context/AuthContext";
import Toolbar from "./ToolBar";
import Aside from "./Aside";
import useStorage from "./useStorage";

export default function Pages() {
  const Storage = (key, value) => useStorage(key, value);
  const [token, setToken] = useState(Storage("tokenNeto"));
  const [profile, setProfile] = useState(Storage("profileNeto"));

  const btnChangeForm = async ({ login, password }) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_AUTH_URL}auth`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ login, password }),
      });
      if (!response.ok) {
        throw new Error("Ошибка авторизации");
      }
      const { token } = await response.json();
      const responseProfile = await fetch(
        `${process.env.REACT_APP_AUTH_URL}private/me`,
        {
          method: "GET",
          headers: { Authorization: `Bearer ${token} ` },
        }
      );
      if (!responseProfile.ok) {
        throw new Error("Профиль не найден");
      }
      const profile = await responseProfile.json();
      Storage("tokenNeto", token);
      Storage("profileNeto", profile);
      setToken(token);
      setProfile(profile);
    } catch {
      Storage("tokenNeto", "delete");
      Storage("prrofileNeto", "delete");
      setToken(null);
      setProfile(null);
    }
  };

  const logOut = () => {
    localStorage.removeItem("tokenNeto");
    localStorage.removeItem("prrofileNeto");
    setToken(null);
    setProfile(null);
  };

  return (
    <div className='containier'>
      <AuthContext.Provider value={{ token, profile, btnChangeForm, logOut }}>
        <Toolbar />
        <Aside />
      </AuthContext.Provider>
    </div>
  );
}
