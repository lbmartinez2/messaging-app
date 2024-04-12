import { BASE_URL } from "../helpers/constants";


  export function getAuthHeaders() {
    const headers = JSON.parse(localStorage.getItem("headers"));
    return headers;
  }

  export function setCurrentId(id) {
    const currentID = localStorage.setItem("current_id", id);
  }

  export function getCurrentId() {
    const currentID = JSON.parse(localStorage.getItem("current_id"));
  }