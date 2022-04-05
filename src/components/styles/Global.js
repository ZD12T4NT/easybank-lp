import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.google.com/specimen/Public+Sans:wght@300;400;700');

    *{
        box-sizing: border-box;
    }

    body{
        background-color:${({theme}) => theme.colors.body};
        font-family:'Public Sans' ,sans-serif;
        font-size:16px;
        margin: 0;
    }

    p{
        font-size:16px;
        opacity: 0.6;
        line-height:1.5;
    }

    img{
       max-width: 100%;
    }
`

export default GlobalStyles
