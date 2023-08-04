import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { enterFacts } from "../slices/factsStarWars";

function Task1() {
  const facts = useSelector((state) => state.facts);
  const dispatch = useDispatch();
  const changeIndex = (e) => {
    const { value } = e.target;
    dispatch(enterFacts(value));
  };

  return (
    <div className="containier">
      <h3> Задание 1</h3>
      <input
        type="number"
        value={facts.indexFacts}
        onChange={changeIndex}
      ></input>
      <ul className="listFacts">
        {facts.arrFacts.slice(0, facts.indexFacts).map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Task1;

