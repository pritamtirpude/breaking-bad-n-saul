import React from "react";
import CategoryStyle from "./CategoryStyles";

const CategoryComponent = ({ categoryValue }) => {
  return (
    <CategoryStyle>
      <select onChange={categoryValue}>
        <option>Select by category</option>
        <option value="Breaking Bad">Breaking Bad</option>
        <option value="Better Call Saul">Better Call Saul</option>
      </select>
    </CategoryStyle>
  );
};

export default CategoryComponent;
