import React, { useState } from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="auth">
      <div className="container">
        <h1>Oops!</h1>
        <h2>404 - Not Found</h2>
        <h3>Sorry, the page you requested was not found</h3>
        <p>
          <Link to="/signin">Return to sign in</Link>
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
