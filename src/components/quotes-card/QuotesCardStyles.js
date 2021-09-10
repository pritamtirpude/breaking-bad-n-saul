import styled from "styled-components";
import { motion } from "framer-motion";

const QuotesCardStyle = styled(motion.div)`
  padding: 5rem 2rem;
  background: white;
  position: relative;
  width: 300px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.5);
  background: linear-gradient(to left, #aaffa9, #11ffbd);
  overflow: hidden;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  .quotation {
    position: absolute;
    top: 10px;
    left: 20px;
    z-index: 1;
  }

  .author {
    display: inline-block;
    color: #4b634b;
  }
  h5 {
    color: #0d330d;
    z-index: 2;
  }

  img {
    width: 50px;
    height: 50px;
    opacity: 0.5;
  }
`;

export default QuotesCardStyle;
