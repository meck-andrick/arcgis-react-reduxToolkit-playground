import React from "react";
import "./Header.css";
import { useSelector, useDispatch } from "react-redux";
import { setname1 } from "../../redux/slices/name1-Slice";
import { setage1 } from "../../redux/slices/name1-Slice";
import { store } from "../../redux/store";

import { AnotherClick } from "../../utils/extraClick";

const Header = () => {
  console.log("header render");
  const view = useSelector((state) => state.viewSlice.view);
  const dispatch = useDispatch();

  function zoomTestButtonClick() {
    console.log(view);
    var newCenter = {
      center: [-82.4421, 35.6117],
      zoom: 15,
    };
    view.goTo(newCenter);
  }

  function setDefinitionExpressionClick() {
    console.log((view.map.layers.items[0].definitionExpression = "FID = 2"));
  }

  function clearDefExpressionClick() {
    console.log((view.map.layers.items[0].definitionExpression = ""));
  }

  function changeName1() {
    dispatch(setname1("Todd"));
  }

  function changeAge1() {
    // this gets the store values!
    let ageer = store.getState().name1Slice.age1;
    // then you can do whatever you want with it
    ageer++; // NOTE** this is not updated in the store yet... so nothing else knows about it
    //then you can set it again with dispatch
    dispatch(setage1(ageer));
  }

  function callUtilOnClick() {
    AnotherClick();
  }

  return (
    <div className="header">
      <button onClick={zoomTestButtonClick}>Zoom Test</button>
      <button onClick={setDefinitionExpressionClick}>Set Defn Express</button>
      <button onClick={clearDefExpressionClick}>Clear Expression</button>
      <button onClick={changeName1}>Change Name</button>
      <button onClick={changeAge1}>Change Age</button>
      <button onClick={callUtilOnClick}>State from Util</button>
    </div>
  );
};

export default Header;
