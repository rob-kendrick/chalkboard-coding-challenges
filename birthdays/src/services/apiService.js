const baseURL =
  "https://randomuser.me/api/?results=1000&seed=chalkboard&inc=name,dob";

export async function getUsers() {
  return await fetch(`${baseURL}`)
    .then((response) => {
      const result = response.json();
      return result;
    })
    .then((res) => {
      //adding id properties to users
      for (let i = 0; i < res.results.length; i++) {
        res.results[i].id = i;
      }

      return res.results;
    })
    .catch((err) => console.error(" : : : Error in API Service : : : ", err));
}
