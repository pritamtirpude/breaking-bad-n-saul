import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *,::before,::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    html{
        font-size: 62.5%;
        scroll-behavior: smooth;
    }

    body{
        background: linear-gradient(to right, #13220F, #8D9D2A,#294515);
        font-family: 'Poppins', sans-serif;
        font-size: 1.6rem;
        overflow-x: hidden;
    }
`;

export default GlobalStyles;
