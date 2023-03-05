import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./SingleDesign.css";
import { useParams } from "react-router-dom";
import {
  clearErrors,
  deleteDesign,
  getSingleDesign,
} from "../../action/designAction";

const SingleDesign = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const { loading, error, design } = useSelector((state) => state.design);

  useEffect(() => {
    dispatch(getSingleDesign(id));
  }, [dispatch, id]);

  const date = new Date(design.createdAt);
  const formattedDate = date.toLocaleDateString("default", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(design.css);
    window.alert("Design Copied to clipboard!");
  };

  const handleDelete = () => {
    dispatch(deleteDesign(id));
    window.alert("Your design was successfully deleted!");
    window.location = "/designs";
  };

  return (
    <Fragment>
      <div className="header-container">
        <div className="design-topic">
          <h3>{design.topic}</h3>
          <p>{formattedDate}</p>
        </div>
        <div className="copy-dlt-btn">
          <button onClick={handleCopy} className="copy-button">
            Copy
          </button>
          <button onClick={handleDelete} className="copy-button">
            Delete
          </button>
        </div>
      </div>
      <main>
        <section>
          <h2 style={{ color: "black" }}>Input</h2>
          <textarea id="input" value={design.css} />
        </section>
        <section>
          <h2 style={{ color: "black" }}>Preview</h2>
          <div id="output" dangerouslySetInnerHTML={{ __html: design.css }} />
        </section>
      </main>
      <footer>
        <p style={{ color: "black" }}>&copy; 2023 CodeCloset</p>
      </footer>
    </Fragment>
  );
};

export default SingleDesign;
