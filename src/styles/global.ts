import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding:0;
    box-sizing: border-box;
}

/* Utilitários */

.flex {
    display:flex;
}

.align-center{
    align-items:center ;
}

/* Utilitários */
:focus {
    outline:0;   
}

body{   
    -webkit-font-smoothing:antialiased;
    background: #F6F4F6;
}

body,input,textarea,button {
    font-family: 'Mulish', sans-serif;
    font-weight: 400;
    font-size:1rem;
}
`;
