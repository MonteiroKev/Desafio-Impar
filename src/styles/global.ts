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
.react-modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom:0 ;
    background-color: rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content{    
    position: relative;    
    width: 100%;
    max-width: 438px;    
    border-radius: 15px;
  }
`;
