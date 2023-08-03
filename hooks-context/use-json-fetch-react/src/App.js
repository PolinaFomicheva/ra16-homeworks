import './App.css';
import Data from './Data';
import Error from './Error';
import Loading from './Loading';

function App() {
  return (
    <div className='container list-group'>
      <Data />
      <Error />
      <Loading />
    </div>
  );
}

export default App;