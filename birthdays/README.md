# What is this project?

- If you are reading this, you probably already know what this project is, but I will describe it again just in case :)
- This is a simple application which acts as a a quasi contact list. It lists users, their names, and birthdays. Once you click on a user, it tells you their age in years.
- This project uses an external api (Get Random Users) as its data source.

# Installing and Running the Project

- Before running the birthdays app, first run <npm i> in the root directory (Chalkboard-Coding-Challenges)
- cd > birthdays. Once in birthdays folder, run <npm i> again.
- Once in birthdays folder, run <npm start>. This starts development server
- To run tests, run <npm t> from terminal in "birthdays" directory.

# Technical Approach

- For this app, I broke down what I needed the app to do before writing the code
  1. Make external API call, get an array of users. Then set as state to be used by the rest of the components
  2. In app.js, render a list of users. This list of users will .map each user into a list item. Clicking the list item takes us to user details. Return by pressing button. This is the user journey I aimed to create.
  3. Main problem I faced: How do you render user details? With a modal, or by redirecting?
  - In the end I decided to do this via redirecting using react router's 'nav' feature, using a user id as URL parameter.
  - This is why, in API service, I do some data transformation, adding a simple 'id' property to each user.
  - I chose this approach over modal, because using modal has given me weird rendering issues in the past. Better to redirect to new page.
  4. Get the userList to render out each item. Then make each item a clickable div. OnClick, redirect to a different route, using user id as path parameter.
  5. This loads UserDetails. UserDetails retrieves the user information based on id. It displays the information, and gives the user a button to return home.
  6. Once this functionality worked, I wrote some tests based off notes I have taken on react testing library.

# What can be improved ?

- TESTING

  - The tests for this application are very basic. This is because I wanted to save time, and I am less experienced with writing tests than writing code. This is something I am constantly working to improve as I believe TDD can be very useful.
  - That being said, there are some basic rendering and assertion tests for the components.
  - This could be improved by adding further tests for our components.
    - E.G: Testing that props are passed correctly, testing that each .map item has a 'key' property. Testing that links are clickable
    - We could also add E2E testing with Cypress. But I think that would be a bit overkill for this project.
    - We could also add tests for our API call. This would be the most useful immediate test, IMO. If I were to work further on this project, that would be what I added first.

- UI

  - The UI for this project is not pixel perfect. There are definitely improvements which can be made, given some time. This includes more responsive design. If I was working on this project professionally, I would ensure good responsive design across device sizes.
  - I would also consider using libraries such as Styled components / Material UI. But I wanted to do this all vanilla this time.
  - A color scheme to make the app more vibrant would be cool.

- TYPING

  - I coded this app using plain JS. A good consideration would be using Typescript instead. This has the advantage of strict typing and lets the developers know what data types to expect.
  - This would have helped me in the project, especially when dealing with the 'params' object in UserDetails.

- MODULARITY
  - If this app was bigger, it would benefit from modularity. I think we could reprogram the buttons to be reusable, passing in a text property and function, for example.
  - I didn't do that much in terms of modularity because I didn't want to spend too much time on it.

# Conclusion

- Thanks for taking the time to read this. Hope you enjoy the app! How else can it be improved? I look forward to hearing the review.
