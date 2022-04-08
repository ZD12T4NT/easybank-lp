import styled from 'styled-components'

export const Grid = styled.div`
    display: grid;
    grid-template-columns:repeat(4, 1fr);
    height:100vh;


    div:nth-of-type(1){
        grid-column:1 / 6;
        width:600px;
        margin-top:5rem;
    }

    div{
        p{
        font-size:18px;
        color:hsl(0, 0%, 30%);
        line-height:1.5;
        margin:0 3rem 0 0;
    }
    }

    
`

export const Section = styled.div`
    width: 1500px;
    max-width:100%;
    background-color: hsl(220, 16%, 96%);
`
