import React from "react";
import Convert from "../components/Convert/Convert";
import Saved from "../components/Saved/Saved";
import "../scss/Main.scss";

const Main = () => {
  return (
    <div className="Main">
      <Convert />
      <div className="Main-saved">
        <h2 className="Main-title">saved</h2>
        <div className="Main-converted">
          <Saved></Saved>
        </div>
      </div>
    </div>
  );
};

export default Main;
