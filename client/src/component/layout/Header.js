import React, { Fragment, useEffect, useState } from "react";
import "./Header.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const Header = () => {
  const { logout, isAuthenticated } = useAuth0();

  return (
    <Fragment>
      <header>
        <h1 style={{ color: "black" }}>CodeCloset</h1>
        <nav>
          <Link to={"/"}>Home</Link>
          <Link to={"/designs"}>Designs</Link>{" "}
          {isAuthenticated && <Link to={"/designs/new"}>Create</Link>}
          {isAuthenticated && (
            <Link>
              <button className="logout-btn" onClick={() => logout()}>
                log out
              </button>
            </Link>
          )}
        </nav>
      </header>
    </Fragment>
  );
};

export default Header;
