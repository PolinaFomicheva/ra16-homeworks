import React from 'react';
import classNames from 'classnames';

function List({ users, hendleClickUser, activeUser }) {
  return (
    <ul className='list-group col-3'>
      {users.map((user) => {
        const userClass = classNames('list-group-item', 'mb-2', {
          'active': user.id === (activeUser && activeUser.id),
        });

        return (
          <li
            className={userClass}
            role='button'
            tabIndex='0'
            key={user.id}
            id={user.id}
            onClick={() => hendleClickUser(user.id, user.name)}>
            <span>{user.name}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default List;
