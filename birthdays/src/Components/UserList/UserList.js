import React from "react";
import UserListItem from "../UserListItem/UserListItem";
import "./UserList.css";

function UserList({ users }) {
  return (
    <div className="UserList__container">
      <h1 className="UserList__Header">Birthdays</h1>
      {users.map((item) => {
        //return userListItem
      })}
    </div>
  );
}

export default UserList;
