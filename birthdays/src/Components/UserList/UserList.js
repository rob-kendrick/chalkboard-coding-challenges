import React from "react";
import UserListItem from "../UserListItem/UserListItem";
import "./UserList.css";

function UserList({ users }) {
  return (
    <div className="UserList__container">
      <h1 className="UserList__header">Birthdays</h1>
      {users.map((item) => {
        return (
          <UserListItem
            data-testid="UL-item"
            user={item}
            key={item.id}
          ></UserListItem>
        );
      })}
    </div>
  );
}

export default UserList;
