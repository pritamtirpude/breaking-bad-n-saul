import React from "react";
import CardComponent from "../card/CardComponent";
import CardListContainer from "./CardLIstStyles";
import LoaderComponent from "../loader/LoaderComponent";

const CardList = ({ characters, isLoading }) => {
  return isLoading ? (
    <LoaderComponent />
  ) : (
    <CardListContainer>
      {characters.map((character) => (
        <CardComponent characterdata={character} key={character.char_id} />
      ))}
    </CardListContainer>
  );
};

export default CardList;
