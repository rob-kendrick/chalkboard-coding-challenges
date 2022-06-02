import { render, screen } from "@testing-library/react";
import UserList from "./UserList";
import { BrowserRouter as Router } from "react-router-dom";

//Creating mock data
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

test("Renders Contacts successfully", () => {
  //testing the render
  render(
    <Router>
      <UserList users={mockUsers}></UserList>
    </Router>
  );
});

test("PROPS: Users names should appear on screen", () => {
  render(
    <Router>
      <UserList users={mockUsers}></UserList>
    </Router>
  );

  //Testing for first username
  expect(screen.getByText(/Pamela Howell/i)).toBeInTheDocument();

  //Sertan Gommers is our final mock user. If this passes, all our users are rendered
  expect(screen.getByText(/Sertan Gommers/i)).toBeInTheDocument();
});
