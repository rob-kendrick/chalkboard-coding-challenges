import { getUsers } from "./apiService";

// We expect an array of objects to be returned. So we test for this below.

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
