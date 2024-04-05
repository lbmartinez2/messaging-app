import React, { useEffect } from "react";

function Login() {
  async function logInData() {
    try {
      const data = await fetch("http://206.189.91.54/api/v1/auth/sign_in", {
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
