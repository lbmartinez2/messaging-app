import "./App.css";
import { BASE_URL } from "./helpers/constants";
import { getAuthHeaders, handleLogOut, setCurrentId, setName } from "./helpers/functions";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import ChannelsGet from "./components/ChannelsGet";
import CreateChannels from "./components/CreateChannels";
import MessageUser from "./components/MessageUser";
import { CiLogout } from "react-icons/ci";
import { BiMessageSquareDetail, BiGroup } from "react-icons/bi";
import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

const success = () => toast("Successfully Logged in");

function App() {
  const navigate = useNavigate();

  function handleLogOut() {
    localStorage.removeItem('headers');
    navigate("/login");
  }

  useEffect(() => {
    success();
  }, [])
  

  return (
    <>
      <ToastContainer />
      <div className="app-container">
        <div className="side-nav-container">
          <div className="side-nav-1">
            <div className="icons">
            <div className="logo">Logo</div>
            <div className="channels"><BiGroup /></div>
            <div className="messages"><BiMessageSquareDetail /></div>
            </div>
            <div className="log-out" onClick={handleLogOut}><CiLogout /></div>
            
          </div>
          <div className="side-nav-2">
          <div className="channel-list-header">Create Channels</div>
            <CreateChannels />
            <div className="channel-list-header">User Channels</div>
            <ChannelsGet />
            <div className="user-list-header">Direct Messages</div>
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
