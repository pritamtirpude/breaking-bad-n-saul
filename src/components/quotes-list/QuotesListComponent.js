import React from "react";
import QuotesListContainer from "./QuotesListStyles";
import QuotesCardComponent from "../quotes-card/QuotesCardComponent";
import LoaderComponent from "../loader/LoaderComponent";

const QuotesListComponent = ({ quotes, isLoading }) => {
  return isLoading ? (
    <LoaderComponent />
  ) : (
    <QuotesListContainer>
      {quotes.map((quote) => (
        <QuotesCardComponent key={quote.quote_id} quoteData={quote} />
      ))}
    </QuotesListContainer>
  );
};

export default QuotesListComponent;
