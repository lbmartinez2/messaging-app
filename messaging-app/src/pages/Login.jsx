import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { HeaderContext } from "../main";
import { BASE_URL } from "../helpers/constants";





function Login() {
  const navigate = useNavigate();
  const {headers, handleHeadersChange} = useContext(HeaderContext)

  async function handleLogin({email, password}) {
    try {
      const data = await fetch(`${BASE_URL}/auth/sign_in`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const authHeaders = {
        "access-token": data.headers.get("access-token"),
        client: data.headers.get("client"),
        uid: data.headers.get("uid"),
        expiry: data.headers.get("expiry")
      }

      localStorage.setItem("headers", JSON.stringify(authHeaders));
      handleHeadersChange(authHeaders);

    //   console.log(uid, expiry, client, access_token);

      const response = await data.json();
      return {response, authHeaders};

      //   if (response.errors) {
      //     throw response.errors.full_messages[0];
      //   }
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {console.log(headers)}, [headers])

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const loginData = await handleLogin(data);
    
    // console.log("Status",  loginData.authHeaders["access-token"])
    if (loginData.authHeaders["access-token"]) {
        console.log(loginData);
        console.log("Login Success")
        handleHeadersChange(loginData.authHeaders);
        navigate("/app")
    }

    e.target.reset();
  };


  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        name="email"
        type="email"
        id="email"
        placeholder="Enter your email address"
        required
      />
      <label htmlFor="password">Email</label>
      <input
        name="password"
        type="password"
        id="password"
        placeholder="Enter your password"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;