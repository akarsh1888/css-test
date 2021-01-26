import React from "react";
import "./button.scss";
const Button = ({ icon = false, primary = false }) => {
  return (
    <div className="container">
      <div className="btn-wrap p-1">
        <h3>Button Components</h3>
        <p className="my-1">
          Components that are supposed to be used in our projects. Button
          component designs
        </p>
        <button className={`btn-${primary ? "main" : "light"}`}>
          {icon ? <i class="far fa-arrow-alt-circle-down"></i> : ""}
          <span className={`${icon ? "i" : ""}`}>Button</span>
        </button>
      </div>
    </div>
  );
};

export default Button;
