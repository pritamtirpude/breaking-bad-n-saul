import styled from "styled-components";
import { motion } from "framer-motion";

const CardStyles = styled(motion.div)`
  width: 300px;
  height: 500px;
  margin: 0 auto;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    width: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .name {
    position: absolute;
    bottom: -25px;
    left: 50%;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.5);

    h4 {
      color: white;
    }
  }

  .character-info {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    visibility: hidden;
    transform: translateY(100%);
    transition: transform 0.5s ease;
    background: rgba(0, 0, 0, 0.75);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: white;
  }

  &:hover .character-info {
    visibility: visible;
    transform: translateY(0%);
  }
`;

export default CardStyles;
