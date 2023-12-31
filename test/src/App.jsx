import 'devextreme/dist/css/dx.dark.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Users from './components/Users/Users';
import Login from './components/Login/Login';
import PrivateRoute from './routes/private.route';

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<PrivateRoute />}>
          <Route exact path="/users" element={<Users />} />
        </Route>
        <Route exact path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default App;
