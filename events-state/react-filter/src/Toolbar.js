import React from "react";


function Toolbar({ categories, selected, onSelectFilter }) {
return (
    <div className="categories">
        {categories.map(el => (
            <div key={el.key} onClick={() => onSelectFilter(el.key)}>{el.name}</div>
        ))}
    </div>
)
}

export default Toolbar