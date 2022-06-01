import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./UserDetails.css";

function UserDetails({ users }) {
  //setting the user we are looking to render as null
  const [user, setUser] = useState(null);
  const nav = useNavigate();

  //we have access to the user id from the params object
  let paramObj = useParams();

  //Finding the user we are looking for using useEffect
  useEffect(() => {
    users.forEach((item) => {
      if (String(item.id) === paramObj.contactId) {
        //setting the user in state
        setUser(item);
      }
    });
  }, [user]);

  //Function for returning home to contact list
  function goBack() {
    nav("/");
  }

  return (
    <div className="UserDetails__container">
      {/* If there is a user matching id, render those user details, otherwise tell user there is an error */}
      {user ? (
        <div className="UserDetails__success">
          <div className="UserDetails__icon">
            <h3>{user.name.first[0]}</h3>
          </div>
          <h3 className="UserDetails__name">{user.name.first}</h3>
          <p className="UserDetails_bday">{user.dob.age} years old</p>
          <button className="UserDetails__btn" onClick={goBack}>
            Go Back
          </button>
        </div>
      ) : (
        // telling user there is an error, and to return
        <div className="UserDetails__fail">
          <h3>:(</h3>
          <p>Oops! Something went wrong! 😪 Return home below ↓</p>
          <button className="UserDetails__btn" onClick={goBack}>
            Get me out of here!
          </button>
        </div>
      )}
    </div>
  );
}

export default UserDetails;
