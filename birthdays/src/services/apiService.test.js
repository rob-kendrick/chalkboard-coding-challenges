import { getUsers } from "./apiService";

// GetUsers takes the original object returned from API, adds 'id' properties to each item, and returns the final modified array.

test("API Service: Returns Array", async () => {
  const response = await getUsers();
  expect(response).toBeInstanceOf(Array);
});

test("API Service: The array contains objects", async () => {
  const response = await getUsers();
  expect(response[0]).toBeInstanceOf(Object);
});

test("API Service: Successfully adds id property", async () => {
  const response = await getUsers();
  expect(response[0]).toHaveProperty("id");
});

test("API Service: Returns a large amount of data as expected", async () => {
  const response = await getUsers();
  const minimumNeeded = 100;
  expect(response.length).toBeGreaterThan(minimumNeeded);
});
