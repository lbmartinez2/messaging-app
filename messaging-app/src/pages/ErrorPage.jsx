import React from 'react'
import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();
    console.error(error);


  return (
    <div id="error-page">
      <h1 className='error-heading'>Oops!</h1>
      <p className='error-text'>Sorry, an unexpected error has occurred.</p>
      <p className='error-text errot-subtext'>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}

export default ErrorPage