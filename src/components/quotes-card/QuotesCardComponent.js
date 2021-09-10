import React from "react";
import QuotesCardStyle from "./QuotesCardStyles";
import quotationicon from "../../img/bg-pattern-quotation.svg";
import { useScroll } from "../scroll-custom/UseScroll";
import { fade } from "../../animation";

const QuotesCardComponent = ({ quoteData }) => {
  const [element, controls] = useScroll();

  return (
    <QuotesCardStyle
      variants={fade}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <img src={quotationicon} alt="quotation icon" className="quotation" />
      <h5>
        {quoteData.quote} - <span className="author">{quoteData.author}</span>
      </h5>
    </QuotesCardStyle>
  );
};

export default QuotesCardComponent;
