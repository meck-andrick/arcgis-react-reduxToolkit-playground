import React from "react";
import "./FloatingDiv.css";
import { useSelector } from "react-redux";

const FloatingDiv = () => {
  console.log("floating div render");
  const age = useSelector((state) => state.name1Slice.age1);
  return <div className="floatingDiv">{age}</div>;
};

export default FloatingDiv;
