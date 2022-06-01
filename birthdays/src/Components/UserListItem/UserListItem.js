import React from "react";
import "./UserListItem.css";
import { useNavigate } from "react-router-dom";
const moment = require("moment");

function UserListItem({ user }) {
  const nav = useNavigate();
  //grabbing user Id for later
  let uid = user.id;

  //Loading user details by redirecting
  const toggleUserInfo = () => {
    nav(`/view/${uid}`);
  };

  //formatting birthday using moment
  const dateFormat = moment(user.dob.date).format("DD/MM/YYYY");

  return (
    <div className="outer">
      <div className="userListItem__container" onClick={toggleUserInfo}>
        <div className="userListItem__profile">
          <h2 data-testid="UL-item-initials" className="userListItem__initials">
            {user.name.first[0]}
            {user.name.last[0]}
          </h2>
          {/* grab initials, and set as profile picture */}
        </div>
        <div className="userListItem__details">
          <h3 className="userListItem__name">
            {user.name.first} {user.name.last}
          </h3>
          <p className="userListItem__bday">{dateFormat}</p>
        </div>
      </div>
    </div>
  );
}

export default UserListItem;
