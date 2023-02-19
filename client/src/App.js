import React, { Fragment } from "react";
import "./App.css";
import Header from "./component/layout/Header.js";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import Design from "./component/Design/Design";
import AllDesigns from "./component/Design/AllDesigns";
import SingleDesign from "./component/Design/SingleDesign";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route exact path="/designs/new" element={<Design />} />
        </Routes>
        <Routes>
          <Route exact path="/designs" element={<AllDesigns />} />
        </Routes>
        <Routes>
          <Route exact path="/design/:id" element={<SingleDesign />} />
        </Routes>
      </Router>
    </Fragment>
  );
};

export default App;
