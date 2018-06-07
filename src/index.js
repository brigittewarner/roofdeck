import React from "react";
import ReactDOM from "react-dom";
import './Base.css';

const PrimaryNav = () => {
  return <div><a className="button button-outline" href="#">Hello Horizon!</a></div>;
};

ReactDOM.render(<PrimaryNav />, document.getElementById("primary_nav"));

