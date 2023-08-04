import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeSearchField } from "../slice/skilsSlice";
debugger;

export default function Skills() {
  const { items, loading, error, search } = useSelector(
    (state) => state.skills
  );
  debugger;
  const dispatch = useDispatch();

  const handleSearch = (evt) => {
    const { value } = evt.target;
    debugger;
    dispatch(changeSearchField(value));
    debugger;
  };

  const hasQuery = search.trim() !== "";
  return (
    <Fragment>
      <div>
        <input type="search" value={search} onChange={handleSearch} />
      </div>
      {!hasQuery && <div>Type something to search</div>}
      {hasQuery && loading && <div>searching...</div>}
      {error ? (
        <div>Error occured</div>
      ) : (
        <ul>
          {items.map((o) => (
            <li key={o.id}>{o.name}</li>
          ))}
        </ul>
      )}
    </Fragment>
  );
}

