import React from "react";
import CardStyles from "../card/CardStyle";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CardComponent = ({ characterdata }) => {
  return (
    <CardStyles whileHover={{ scale: 0.98 }}>
      <LazyLoadImage src={characterdata.img} alt={characterdata.name} />
      <div className="name">
        <h4>{characterdata.name}</h4>
      </div>

      <div className="character-info">
        <div className="nickname">Nickname: {characterdata.nickname}</div>
        <div className="birthday">Birthday: {characterdata.birthday}</div>
        <div className="status">Status: {characterdata.status}</div>
        <div className="portrayed">Portrayed By: {characterdata.portrayed}</div>
      </div>
    </CardStyles>
  );
};

export default CardComponent;
