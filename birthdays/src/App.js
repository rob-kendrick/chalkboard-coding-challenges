import "./App.css";
import { useState, useEffect } from "react";
import { getUsers } from "./services/apiService";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./Components/UserList/UserList";
import UserDetails from "./Components/UserDetails/UserDetails";

/*    -Render Router
      -Render User List
      -User List maps list items
      - clicking on list itme redirects to user details page
      -clicking button takes us back home to contacts list */

function App() {
  const [users, setUsers] = useState([]);

  //Grabbing users from our API
  useEffect(() => {
    getUsers()
      .then((result) => {
        console.log(result, "Data Returned from API");
        //Setting our users state
        setUsers(result);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserList />}></Route>
        <Route
          path="/view/:contactId"
          element={<UserDetails users={users}></UserDetails>}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
