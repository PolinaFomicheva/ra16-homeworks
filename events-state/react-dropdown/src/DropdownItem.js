import React from 'react';
function DropdownItem({ dropdownItem, setState }) {

    return (
        <ul className="dropdown">{dropdownItem.map((item) => 
            <li className='dropdown-item' onClick={() => setState(false)} key={item}>{item}</li>
            )}</ul>
    )
}

export default DropdownItem