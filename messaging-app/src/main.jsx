import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx";


export const HeaderContext = createContext(null);

const headersInitValue = {
  uid: null,
  "access-token": null,
  expiry: null,
  client: null,
};

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/app",
    element: <App />,
  },
]);

function Main() {
  const [headers, setHeaders] = useState(headersInitValue);

  function handleHeadersChange(data) {
    setHeaders(data);
  }

  return (
    <React.StrictMode>
    <HeaderContext.Provider value={{ headers, handleHeadersChange }}>
      <RouterProvider router={router} />
    </HeaderContext.Provider>
  </React.StrictMode>
  )
}

ReactDOM.createRoot(document.getElementById("root")).render(
 <Main />
);
