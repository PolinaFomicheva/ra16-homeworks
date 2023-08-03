import { useEffect, useState } from 'react';
import './App.css';
import List from './List';
import Details from './Details';

function App() {
  const [users, setUsers] = useState([]);
  const [activeUser, setActiveUser] = useState(null);

  useEffect(() => {
    fetch(process.env.REACT_APP_USERS)
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const hendleClickUser = (id, name) => {
    setActiveUser({id: id, name: name});
  };

  return (
    <>
      <div className='container row mx-auto'>
        <List
          users={users}
          hendleClickUser={hendleClickUser}
          activeUser={activeUser}
        />
        {activeUser && <Details info={activeUser} />}
        
      </div>
    </>
  );
}

export default App;
