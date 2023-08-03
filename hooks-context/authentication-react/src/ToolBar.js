import { React, useContext } from "react";
import AuthContext from "../context/AuthContext";
import ToolbarForm from "./TollbarForm";
import TollbarProfile from "./TollbarProfile";

export default function Toolbar() {
  const { profile } = useContext(AuthContext);
  return (
    <div className='Tolbar'>
      <title>Neto Social</title>
      {profile ? <TollbarProfile /> : <ToolbarForm />}
    </div>
  );
}

