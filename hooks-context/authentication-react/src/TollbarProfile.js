import { React, useContext } from "react";
import AuthContext from "../context/AuthContext";

export default function TollbarProfile() {
  const { profile, logOut } = useContext(AuthContext);

  return (
    <div className='UserProfile'>
      <span>Hello, {profile.name}</span>
      <div className='user-photo'>
        <img src={profile.avatar} alt={profile.name} />
      </div>
      <button onClick={logOut}>Logout</button>
    </div>
  );
}
