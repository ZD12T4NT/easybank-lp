import styled from 'styled-components'

export const Flex = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height:100vh;
    width:433px;

    h1{
        font-size:3.5rem;
        font-weight:500;
        color:hsl(233, 26%, 24%);
    }

    p{
        margin-bottom:2rem;
        text-align:left;
        font-size:18px;
        color:hsl(0, 0%, 30%);
        line-height:1.5;
    }



    & > div,
    & > ul {
        flex:1;
    }

    @media only screen and (max-width:${({ theme }) => theme.mobile}){
        flex-direction:column;
        text-align:center;
    }
`
