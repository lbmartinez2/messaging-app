import "./App.css";
import { BASE_URL } from "./helpers/constants";
import { getAuthHeaders } from "./helpers/functions";
import Search from "./components/Search";
import { Link, Outlet } from "react-router-dom";

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
    // console.log(response.data);
    return response;
  } catch (err) {
    console.error(err);
  }
}

function App() {
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
      
            <button className="channels-btn">
              <Link to="channels">Channels</Link>
            </button>
            <Search /> 
            <button className="messages-btn">
              <Link to="messages" >Messages</Link>
            </button>
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
