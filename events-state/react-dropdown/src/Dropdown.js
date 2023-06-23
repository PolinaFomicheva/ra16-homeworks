import React from 'react';
import { useState } from "react";
import DropdownItem from "./DropdownItem"
function Dropdown(){

    const dropdown =['Profile Information', 'Change Password', 'Become PRO', 'Help', 'Log Out']
    const drop = []
   const [state, setState] = useState({ open: false });

   const handleDropdownClick = () =>
   setState({ open: !state.open });


    return (
<div className="container">
    <div data-id="wrapper" className="dropdown-wrapper">
      <button data-id="toggle" className="btn" onClick={handleDropdownClick}>
        <span>Account Settings</span>
        <i class="material-icons">public</i>
      </button>
    </div>
    {state.open && (<DropdownItem setState={setState} dropdownItem={dropdown}/>)}
  </div>
    )
}


export default Dropdown