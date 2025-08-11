import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus{
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme["light-pink"]};
    }

    body{
        -webkit-font-smoothing: antialiased;
    }

    body, input-security, textarea, button {
        font-family: Arial, Helvetica, sans-serif;
    }
`;
