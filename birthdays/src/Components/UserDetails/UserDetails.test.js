// Things to to test in this component:
//  - Does the component grab the params from parameter object correctly ? => use Jest
//  - Does the component render user info correctly ? => React testing library

import { render, screen } from "@testing-library/react";
import UserDetails from "./UserDetails";
import { BrowserRouter as Router } from "react-router-dom";

const mockUsers = [
  {
    name: {
      title: "Miss",
      first: "Pamela",
      last: "Howell",
    },
    dob: {
      date: "1980-02-26T07:16:39.510Z",
      age: 42,
    },
    id: 0,
  },
  {
    name: {
      title: "Mr",
      first: "Toby",
      last: "Jackson",
    },
    dob: {
      date: "1946-03-03T10:34:51.447Z",
      age: 76,
    },
    id: 1,
  },
  {
    name: {
      title: "Mr",
      first: "Sertan",
      last: "Gommers",
    },
    dob: {
      date: "1981-10-09T03:52:30.372Z",
      age: 41,
    },
    id: 3,
  },
];

const idToFind = 1;

test("UserDetails: should render user details correctly", () => {
  render(
    <Router>
      <UserDetails users={mockUsers}></UserDetails>
    </Router>
  );
});
