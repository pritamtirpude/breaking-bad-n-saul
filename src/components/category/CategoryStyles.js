import styled from "styled-components";

const CategoryStyle = styled.div`
  select {
    padding: 2rem 2rem;
    background-color: #022707;
    color: white;
    border: none;
    border-radius: 0.5rem;
    box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.5);
    @media screen and (max-width: 768px) {
      margin-top: 1rem;
    }

    &:focus {
      outline: none;
    }
  }
`;

export default CategoryStyle;
