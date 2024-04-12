import { BASE_URL } from "../helpers/constants";


  export function getAuthHeaders() {
    const headers = JSON.parse(localStorage.getItem("headers"));
    return headers;
  }

  export function setCurrentId(id) {
    localStorage.setItem("current_id", id);
  }

  export function getCurrentId() {
    return JSON.parse(localStorage.getItem("current_id"));
  }

  export function setName(name) {
    localStorage.setItem("name", name);
  }

  export function getName() {
    return localStorage.getItem("name");
  }

  export async function getRecentDMs() {
    const headers = getAuthHeaders();
    try {
      const data = await fetch(`${BASE_URL}/users/recent`, {
        headers: {
          "Content-Type": "application/json",
          ...headers,
        },
      });
      const response = await data.json();
      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  }
  

  
  