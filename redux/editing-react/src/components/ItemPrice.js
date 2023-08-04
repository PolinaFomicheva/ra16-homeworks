export default function ItemPrice({ item, deleteClick, changeForm }) {
    return (
      <li>
        {item.name} {item.price}
        <button onClick={() => deleteClick(item.id)}>удалить</button>
        <button onClick={() => changeForm(item.id)}>изменить</button>
      </li>
    );
  }
  