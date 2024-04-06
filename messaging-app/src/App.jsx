import { useContext, useEffect, useState } from "react";
import "./App.css";
import { HeaderContext } from "./main";
import { BASE_URL } from "./helpers/constants";
import { getAuthHeaders } from "./helpers/functions";


function App() {
  const headers = getAuthHeaders();
  async function getAllUsers() {
  
    try {
        const data = await fetch(`${BASE_URL}/users`, {
            headers: {
                "Content-Type": "application/json",
                ...headers
            },
        })
        const response = await data.json();
        console.log(response.data);
        return response;
    }
    catch (err) {
        console.error(err);
    }
  }

useEffect(() => {
  getAllUsers();
  console.log(headers);
})

  return (
    <>
      <div>Homepage</div>
    </>
  );
}

export default App;
