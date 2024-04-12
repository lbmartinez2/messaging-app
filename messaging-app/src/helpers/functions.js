import { BASE_URL } from "../helpers/constants";


  export function getAuthHeaders() {
    const headers = JSON.parse(localStorage.getItem("headers"));
    return headers;
  }

  