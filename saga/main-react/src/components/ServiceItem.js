import { useEffect, React } from "react";
import { useSelector, useDispatch } from "react-redux";
import { serviceRequest } from "../slice";
import { useParams } from "react-router-dom";

export default function ServiceItem() {
  const dispatch = useDispatch();
  const { details, loading, error } = useSelector((state) => state.service);
  const { id } = useParams();

  useEffect(() => {
    dispatch(serviceRequest(`/${id}`));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading}
      {error && (
        <div>
          <p>Произошла ошибка!</p>{" "}
          <button onClick={() => dispatch(serviceRequest(`/${id}`))}>
            Повторить запрос
          </button>
        </div>
      )}
      {details && !loading && (
        <p>{`${details.name}: ${details.price} ${details.content}`}</p>
      )}
    </>
  );
}
