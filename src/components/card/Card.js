import React from "react";

const Card = ({ children, style, onClick }) => {
  return (
    <div
      style={{
        borderRadius: "10px",
        backgroundColor: "var(--cream)",
        padding: "12px 16px",
        marginBottom: "12px",
        cursor: onClick ? "pointer" : "auto",
        ...style,
      }}
      role={onClick ? "button" : undefined}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;
