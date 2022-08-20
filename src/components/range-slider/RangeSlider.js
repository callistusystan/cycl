import React from "react";
import "./RangeSlider.css";

const RangeSlider = ({ value, onChange }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        position: "relative",
        height: "24px",
        width: "255px",
      }}
    >
      <input
        type="range"
        value={value}
        min={0}
        max={3}
        onChange={onChange}
        className="slider"
        style={{
          width: "255px",
          appearance: "none",
          height: "6px",
          background: "none",
          position: "absolute",
          zIndex: "1",
        }}
      />
      {/* Slider track */}
      <div
        style={{
          position: "absolute",
          background: "var(--dark)",
          height: "6px",
          width: "255px",
        }}
      ></div>
      {/* Background circle 1 */}
      <div
        style={{
          position: "absolute",
          background: "var(--olive)",
          border: "6px solid var(--dark)",
          top: "0",
          borderRadius: "50%",
          height: "24px",
          width: "24px",
        }}
      ></div>
      {/* Background circle 2 */}
      <div
        style={{
          position: "absolute",
          background: "var(--olive)",
          border: "6px solid var(--dark)",
          top: "0",
          left: "calc(25% + 13px)",
          borderRadius: "50%",
          height: "24px",
          width: "24px",
        }}
      ></div>
      {/* Background circle 3 */}
      <div
        style={{
          position: "absolute",
          background: "var(--olive)",
          border: "6px solid var(--dark)",
          top: "0",
          borderRadius: "50%",
          right: "calc(25% + 13px)",
          height: "24px",
          width: "24px",
        }}
      ></div>
      {/* Background circle 4 */}
      <div
        style={{
          position: "absolute",
          background: "var(--olive)",
          border: "6px solid var(--dark)",
          top: "0",
          borderRadius: "50%",
          right: 0,
          height: "24px",
          width: "24px",
        }}
      ></div>
    </div>
  );
};

export default RangeSlider;
