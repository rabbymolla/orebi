import React from "react";
import { GrFormPreviousLink } from "react-icons/gr";

const PrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={className}
      style={{
        ...style,

        background: "rgba(0, 0, 0, 0.2)",
        position: "absolute",
        top: "38%",
        left: "0",
        transform: "translateY(-38%)",
        zIndex: "1",
        width: "40px",
        height: "40px",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      onClick={onClick}
    >
      <GrFormPreviousLink size={30} color="#fff" />
    </div>
  );
};

export default PrevArrow;
