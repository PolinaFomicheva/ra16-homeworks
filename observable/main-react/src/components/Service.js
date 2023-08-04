import { useEffect, React } from "react";
import { useSelector, useDispatch } from "react-redux";
import { serviceRequest } from "../slice";
import { Link } from "react-router-dom";

export default function Service() {
  const dispatch = useDispatch();
  const { items, loading, error } = useSelector((state) => state.service);

  useEffect(() => {
    dispatch(serviceRequest(""));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading}
      {error && (
        <div>
          <p>Ошибка </p>{" "}
          <button onClick={() => dispatch(serviceRequest(""))}>
            Повторить
          </button>
        </div>
      )}
      {items && !loading && !error && (
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <Link
                to={`/${item.id}/details`}
              >{`${item.name}: ${item.price}`}</Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
