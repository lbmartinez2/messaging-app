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

  
  