import React, { useEffect, useState } from "react";
import "./HeaderTwo.css";
import { useSelector } from "react-redux";

const HeaderTwo = () => {
  console.log("headerTwo render");
  const name1 = useSelector((state) => state.name1Slice.name1);
  const [defExpress, setdefExpress] = useState("not set");

  //   useEffect(() => {
  //     if (view !== null) {
  //       view.when(function () {
  //         setdefExpress(view.map.layers.items[0].definitionExpression);
  //       });
  //     }
  //   }, [view]);

  // useEffect(() => {
  //   setdefExpress(name1);
  //   console.log("effectRan");
  // }, [name1]);

  return (
    <div className="headerTwo">
      <div className="defExpressionValue">{name1}</div>
    </div>
  );
};

export default HeaderTwo;
