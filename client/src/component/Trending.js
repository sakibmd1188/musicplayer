import React, { useEffect } from "react";
import APIKit from "../spotify";
import "./trending.css";
const Trending = () => {
  useEffect(() => {
    APIKit.get("artists").then(function (response) {
      console.log(response);
    });
  }, []);
  return (
    <div className="trend">
      <p>Trending's</p>
      <input type="text" className="input" />
    </div>
  );
};

export default Trending;
