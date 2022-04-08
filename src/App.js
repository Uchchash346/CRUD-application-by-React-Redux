import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import AddUser from './components/AddUser/AddUser';
import UsersList from './components/UsersList/UsersList';

function App() {
  return (
    <div>
      <ToastContainer />
      <AddUser />
      <UsersList />
    </div>
  );
}

export default App;
