import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import CategoryComponent from "../category/CategoryComponent";
import SearchStyles from "./SearchStyles";

const SearchComponent = ({ searchEvent, categoryEvent }) => {
  return (
    <SearchStyles>
      <FontAwesomeIcon icon={faSearch} className="search-icon" size="2x" />
      <input
        type="search"
        onChange={searchEvent}
        placeholder="Search by name..."
      />
      <CategoryComponent categoryValue={categoryEvent} />
    </SearchStyles>
  );
};

export default SearchComponent;
