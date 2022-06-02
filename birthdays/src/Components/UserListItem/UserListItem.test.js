import { getAllByTestId, getByTestId, getByText } from "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import UserListItem from "./UserListItem";
import "@testing-library/jest-dom/extend-expect";

const user = {
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
};

test("Each Item should render initials", () => {
  render(
    <Router>
      <UserListItem user={user}></UserListItem>
    </Router>
  );

  //Finding initials of our mock user 'PH'
  const initials = screen.getByText("PH");
  //Checking that initials are in the document
  expect(initials).toBeInTheDocument();
});

test("Each item should render birthday using DD/MM/YYYY format", () => {
  render(
    <Router>
      <UserListItem user={user}></UserListItem>
    </Router>
  );
  //finding birthday of our mock user
  const pamelaBday = screen.getByText("26/02/1980");
  //checking that birthday is in the document
  expect(pamelaBday).toBeInTheDocument();
});
