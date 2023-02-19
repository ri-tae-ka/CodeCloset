import React, { Fragment, useEffect, useState } from "react";
import "./Header.css";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CREATE_DESIGN_RESET } from "../../constants/DesignConstants";
import { clearErrors, createDesign } from "../../action/designAction";
import { useNavigate } from "react-router-dom";
import { share } from "../Design/Design";

const Header = () => {
  const { logout, isAuthenticated } = useAuth0();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, success } = useSelector((state) => state.newDesign);

  const [date, setDate] = useState(new Date());
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  //const [topic, setTopic] = useState("");
  //const [css, setCSS] = useState("");
  const css = CSS;
  console.log(css);

  useEffect(() => {
    if (error) {
      window.alert(error);
      dispatch(clearErrors);
    }
    if (success) {
      window.alert("We added your response!");
      setTimeout(function () {
        navigate("/entry");
      }, 1000);
      dispatch({ type: CREATE_DESIGN_RESET });
    }
  }, [dispatch, error, success]);

  const handleSubmit = (e) => {
    const topic = window.prompt("Please enter Topic");
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("topic", topic);
    myForm.set("css", css);

    dispatch(createDesign(myForm));
    window.alert("New Design Saved!");
    window.location = "/designs/new";
  };

  return (
    <Fragment>
      <header>
        <h1 style={{ color: "black" }}>Code Closet</h1>
        <nav>
          <Link to={"/"}>Home</Link>
          <Link to={"/designs"}>Designs</Link>
          <Link onClick={handleSubmit}>Save</Link>
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
