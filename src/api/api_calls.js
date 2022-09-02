export const BASE_URL = "https://strangers-things.herokuapp.com/api/2206-ftb-pt-web-pt/"

export async function registerNewUser(username, password) {
    fetch(BASE_URL + 'users/register', {
  method: "POST",
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    user: {
      username: username,
      password: password
    }
  })
}).then(response => response.json())
  .then(result => {
    console.log(result);
  })
  .catch(console.error);
}