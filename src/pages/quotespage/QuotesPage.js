import React, { useState, useEffect } from "react";
import axios from "axios";
import QuotesListComponent from "../../components/quotes-list/QuotesListComponent";

const QuotesPage = () => {
  const [quotes, setQuotes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchQuotes();
  }, []);

  const quotesUrl = "https://www.breakingbadapi.com/api/quotes";

  const fetchQuotes = async () => {
    const response = await axios.get(quotesUrl);
    setQuotes(response.data);
    setIsLoading(false);
  };
  return (
    <div>
      <QuotesListComponent quotes={quotes} isLoading={isLoading} />
    </div>
  );
};

export default QuotesPage;
