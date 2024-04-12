import "./App.css";
import { BASE_URL } from "./helpers/constants";
import { getAuthHeaders, setCurrentId, setName } from "./helpers/functions";
import Search from "./components/Search";
import { Link, Outlet } from "react-router-dom";
import ChannelsGet from "./components/ChannelsGet";
import CreateChannels from "./components/CreateChannels";
import { useState } from "react";
import MessageUser from "./components/MessageUser";

export const headers = getAuthHeaders();
export async function getAllUsers() {
  try {
    const data = await fetch(`${BASE_URL}/users`, {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
    });
    const response = await data.json();
    return response;
  } catch (err) {
    console.error(err);
  }
}

function App() {


  const handleClick = (e) => {
    setCurrentId(4927);
    setName("Messages");
  }



  return (
    <>
      <div className="app-container">
        <div className="side-nav-container">
          <div className="side-nav-1">
            <div className="logo">Logo</div>
            <div className="channels">Channels</div>
            <div className="messages">Messages</div>
            <div className="log-out">Log Out</div>
          </div>
          <div className="side-nav-2">
            <CreateChannels />
            <div className="channel-list-header">User Channels</div>
            <ChannelsGet />
            <div className="channel-list-header">Direct Messages</div>
            <MessageUser />
          </div>
        </div>
        <div className="content-container">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
