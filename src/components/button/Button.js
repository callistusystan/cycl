import React from "react";
import "./Button.css";

const Button = ({ label, variant, small, onClick, style }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`button button--${variant} ${small ? "button--small" : ""}`}
      style={{cursor: 'pointer', ...style}}
    >
      {label}
    </button>
  );
};

Button.defaultProps = {
  variant: "primary",
};

export default Button;
