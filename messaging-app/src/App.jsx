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
        ...headers,
      },
    });
    const response = await data.json();
    // console.log(response.data);
    return response;
  } catch (err) {
    console.error(err);
  }
}

function App() {
  return (
    <>
      <div className="navbar"></div>
      <div className="app-container">
        <div className="side-nav-container">
          <div className="side-nav-1">Icons here</div>
          <div className="side-nav-2">
            <Search /> <button className="channels-btn"> Channels </button>
            <button className="messages-btn"> Direct Messages </button>
          </div>
        </div>
        <div className="content-container">
          content here
        </div>
      </div>
    </>
  );
}

export default App;
