import React, { useState, useEffect } from "react";
import { getAllUsers } from "../App";

function Search(props) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedUsers = await getAllUsers();
        setUsers(fetchedUsers.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <input type="text" />
      <div>
        <ul>
            {users &&users.map((user, index) => <li key={index}>{user.email}</li>)}
        </ul>
      </div>
    </>
  );
}

export default Search;
