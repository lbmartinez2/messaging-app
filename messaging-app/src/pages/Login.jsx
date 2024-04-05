import React, { useEffect } from "react";
import { BASE_URL } from "../helpers/constants";

function Login() {
  async function logInData() {
    try {
      const data = await fetch(`${BASE_URL}/auth/sign_in`, {
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "lj@mail.com",
          password: "testpass",
        }),
        method: "POST",
      });
      const access_token = data.headers.get('access-token');
      const client = data.headers.get('client');
      const uid = data.headers.get('uid');
      const expiry = data.headers.get('expiry');
      console.log(uid, expiry, client, access_token);

      const response = await data.json();
      console.log(response);
      if (response.errors) {
        throw response.errors.full_messages[0];
      }
    } catch (err) {
      console.error(err);
    }


  }

  useEffect(() => {
    logInData()
  }, [])

  return (
    <form>
      <input type="email" placeholder="Enter your email address" required />
      <input type="password" placeholder="Enter your password" required />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
