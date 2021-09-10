import React, { useState, useEffect } from "react";
import axios from "axios";
import CardList from "../../components/card-list/CardList";
import SearchComponent from "../../components/search/SearchComponent";

const HomePage = () => {
  const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const charactersUrl = "https://www.breakingbadapi.com/api/characters";

  const fetchData = async () => {
    const response = await axios.get(charactersUrl);
    setCharacters(response.data);
    setIsLoading(false);
  };

  const searchCharacters = characters.filter((character) =>
    character.name.toLowerCase().includes(search.toLowerCase())
  );

  const searchFilter = (e) => {
    setSearch(e.target.value);
  };

  const categoryFilter = async (e) => {
    const categoryData = await axios.get(
      `https://www.breakingbadapi.com/api/characters?category=${e.target.value}`
    );

    console.log(categoryData.data);

    setCharacters(categoryData.data);
  };

  return (
    <div>
      <SearchComponent
        searchEvent={searchFilter}
        categoryEvent={categoryFilter}
      />
      <CardList characters={searchCharacters} isLoading={isLoading} />
    </div>
  );
};

export default HomePage;
