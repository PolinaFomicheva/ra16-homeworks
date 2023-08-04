import { useDispatch, useSelector } from "react-redux";
import { removeService, changeForm, addIdActive } from "../reduxe/dispatchFunc";
import ItemPrice from "./ItemPrice";

export default function ServiceList() {
  const list = useSelector((state) => state.listService);
  const dispatch = useDispatch();

  const deleteClick = (id) => {
    dispatch(removeService(id));
    dispatch(addIdActive(null));
    dispatch(changeForm("clear form"));
  };

  const changeItemPrice = (id) => {
    const itemService = list.find((item) => item.id === id);
    dispatch(addIdActive(id));
    dispatch(changeForm("name", itemService.name));
    dispatch(changeForm("price", itemService.price));
  };

  return (
    <ul>
      {list.map((item) => (
        <ItemPrice
          item={item}
          changeForm={changeItemPrice}
          deleteClick={deleteClick}
        />
      ))}
    </ul>
  );
}
