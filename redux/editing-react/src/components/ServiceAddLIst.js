import { useDispatch, useSelector } from "react-redux";
import {
  addIdActive,
  addService,
  changeForm,
  removeService,
} from "../reduxe/dispatchFunc";

export default function ServiceAddList() {
  const item = useSelector((state) => state.changeService);
  const dispatch = useDispatch();

  const onChangeForm = (e) => {
    const { name, value } = e.target;
    dispatch(changeForm(name, value));
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (item.idActive) {
      dispatch(removeService(item.idActive));
    }
    dispatch(addService(item.name, item.price));
    dispatch(addIdActive(null));
    dispatch(changeForm("clear form"));
  };

  const reset = () => {
    dispatch(changeForm("clear form"));
  };

  return (
    <form onSubmit={submitForm}>
      <input
        type="text"
        name="name"
        value={item.name}
        onChange={onChangeForm}
      />
      <input
        type="text"
        name="price"
        value={item.price}
        onChange={onChangeForm}
      />
      <input type="submit" onSubmit={submitForm} value="Save" />
      {item.idActive && <input type="reset" onClick={reset} value="Cancel" />}
    </form>
  );
}
