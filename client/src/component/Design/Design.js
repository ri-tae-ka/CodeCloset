import React, { Fragment, useEffect, useState } from "react";
import "./Design.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CREATE_DESIGN_RESET } from "../../constants/DesignConstants";
import { clearErrors, createDesign } from "../../action/designAction";

const LearnCSS = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [inputValue, setInputValue] = useState("");

  const [css, setCSS] = useState("");

  const { loading, error, success } = useSelector((state) => state.newDesign);

  const [date, setDate] = useState(new Date());
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  useEffect(() => {
    if (error) {
      window.alert(error);
      dispatch(clearErrors);
    }
    if (success) {
      window.alert("We added your response!");
      window.location = "/designs";
      setTimeout(function () {
        window.location = "/designs";
      }, 1000);
      dispatch({ type: CREATE_DESIGN_RESET });
    }
  }, [dispatch, error, success]);

  const isInputEmpty = inputValue.trim() === "";

  const handleSubmit = (e) => {
    const topic = window.prompt("Please enter Topic");
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("topic", topic);
    myForm.set("css", inputValue);

    dispatch(createDesign(myForm));
    window.alert("New Design Saved!");
    window.location = "/designs/new";
  };

  return (
    <Fragment>
      <form>
        <div className="newdesign-heading">
          <h3>{date.toLocaleDateString("en-US", options).toLowerCase()}</h3>
          <button
            onClick={handleSubmit}
            className="save-button"
            disabled={isInputEmpty}
          >
            Save
          </button>
        </div>
        <main>
          <section>
            <h2>Input</h2>
            <textarea
              id="input"
              value={inputValue}
              onChange={handleInputChange}
            />
          </section>
          <section>
            <h2>Preview</h2>
            <div id="output" dangerouslySetInnerHTML={{ __html: inputValue }} />
          </section>
        </main>
      </form>
      <footer>
        <p style={{ color: "black" }}>&copy; 2023 CodeCloset</p>
      </footer>
    </Fragment>
  );
};

export default LearnCSS;
