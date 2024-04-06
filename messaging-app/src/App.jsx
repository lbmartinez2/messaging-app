import { useContext, useEffect, useState } from "react";
import "./App.css";
import { HeaderContext } from "./main";
import { BASE_URL } from "./helpers/constants";
import { getAuthHeaders } from "./helpers/functions";
import Search from "./components/Search";

  export const headers = getAuthHeaders();
  export async function getAllUsers() {
  
    try {
        const data = await fetch(`${BASE_URL}/users`, {
            headers: {
                "Content-Type": "application/json",
                ...headers
            },
        })
        const response = await data.json();
        // console.log(response.data);
        return response;
    }
    catch (err) {
        console.error(err);
    }
  }

function App() {
  

useEffect(() => {
  getAllUsers();
  // console.log(headers);
})

  return (
    <>
      <div>Homepage</div>
      <Search />
    </>
  );
}

export default App;
