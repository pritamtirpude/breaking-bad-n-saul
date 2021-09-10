import styled from "styled-components";

const NavbarStyle = styled.nav`
  background: rgba(0, 0, 0, 0.75);
  padding: 1rem 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .hamburger {
    display: none;
  }

  @media screen and (max-width: 768px) {
    padding: 1rem 2rem;
    width: 100%;

    .hamburger {
      display: block;
      z-index: 200;
    }
  }

  img {
    width: 50px;
    height: 50px;
    margin: 0rem 1rem;
    object-fit: contain;
  }

  .nav-links {
    width: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    position: relative;

    @media screen and (max-width: 768px) {
      position: absolute;
      top: 10vh;
      left: 0;
      background: rgba(0, 0, 0, 0.9);
      width: 100%;
      height: 30vh;
      justify-content: space-evenly;
      flex-direction: column;
      z-index: 100;
      opacity: 0;
      transform: translateX(-100%);
      transition: transform 0.5s ease-in;
    }

    a {
      text-decoration: none;
      color: #11b43a;
      transition: all 0.4s ease;
      font-weight: bold;

      &:hover {
        color: #0a5216;
      }
    }
  }

  .nav-links.active {
    opacity: 1;
    transform: translateX(0%);
  }
`;
export default NavbarStyle;
