import styled from "styled-components";

const SearchStyles = styled.div`
  padding: 0rem 5rem;
  margin-top: 5rem;
  display: flex;
  justify-content: space-between;
  position: relative;

  @media screen and (max-width: 768px) {
    padding: 0rem 2rem;
    flex-direction: column;
  }

  input[type="search"] {
    padding: 2rem 8rem;
    width: 50%;
    border: none;
    border-radius: 0.5rem;
    background-color: #022707;
    color: white;
    font-family: inherit;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.5);

    @media screen and (max-width: 768px) {
      width: 100%;
    }

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: white;
    }
  }

  .search-icon {
    position: absolute;
    top: 25%;
    left: 70px;
    color: white;

    @media screen and (max-width: 768px) {
      top: 10%;
      left: 50px;
    }
  }
`;

export default SearchStyles;
