import React, { Fragment } from "react";
import "./Home.css";
import { useAuth0 } from "@auth0/auth0-react";

const Home = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <Fragment>
      <div className="full">
        <div className="center-items">
          <p>
            Welcome to <strong>CodeCloset</strong> - Your ultimate HTML/CSS jamming spot!
            <br></br>
            <br></br>
            Keep your coding skills fresh and your favourite snippets organized
            with ease.
            <br></br>
            <br></br>
            <strong>CodeCloset</strong> is your personal hub for all your HTML/CSS needs. From
            basic tags to advanced techniques, you'll get everything you need to
            develop your web projects like a pro.
            <br></br>
          </p>
          <br></br>
          {!isAuthenticated && (
            <button onClick={() => loginWithRedirect()}>log in</button>
          )}
          {isAuthenticated && <a className="create" href="/designs/new">Create New Design</a>}
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
