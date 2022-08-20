import React from "react";
import "./Button.css";

const Button = ({ label, variant, small, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`button button--${variant} ${small ? "button--small" : ""}`}
    >
      {label}
    </button>
  );
};

Button.defaultProps = {
  variant: "primary",
};

export default Button;
