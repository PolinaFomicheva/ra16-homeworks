import React from "react";
import Star from "./Star";


function Stars(props) {

    if (props.count < 1 || props.count > 5) {
        return null;
      }
      
      let stars = [];
      
      for(let i = 0; i < props.count; i++){
        stars.push(<Star />);
      }
    
console.log(stars)

    return (
        <ul className="card-body-stars u-clearfix">
            {stars}
        </ul>
    )
}





export default Stars