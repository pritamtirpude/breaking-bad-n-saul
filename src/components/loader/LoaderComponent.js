import React from "react";
import loader from "../../img/spinner.svg";

const LoaderComponent = () => {
  return (
    <img
      src={loader}
      alt="spinner"
      style={{ width: "200px", margin: "0 auto", display: "block" }}
    />
  );
};

export default LoaderComponent;
