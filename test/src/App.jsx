import { Routes, Route } from "react-router-dom";
import "./App.css";
import AuthRoutes from "./routes/auth.routes";
import Users from "./components/Users";
import ProtectedRoutes from "./routes/auth.routes";

function App() {
  return (
    <>
      <Routes>
        {/* {AuthRoutes} */}
        {/* <Route
          exact
          path="/users"
          render={() => (isLoggedIn() ? <Redirect to="/login" /> : <Users />)}
        /> */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/users" element={<Users />} />
        </Route>
      </Routes>
    </>
  );
}

const isLoggedIn = () => {
  return true;
};

export default App;
