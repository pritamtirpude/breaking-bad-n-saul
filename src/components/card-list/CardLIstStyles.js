import styled from "styled-components";
import { motion } from "framer-motion";

const CardListContainer = styled(motion.div)`
  padding: 2rem 5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    padding: 2rem 2rem;
  }
`;

export default CardListContainer;
