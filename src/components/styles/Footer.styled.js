import styled from 'styled-components'

export const FooterOuter = styled.div`
    height: 25vh;
    background-color:${({ theme }) => theme.colors.footer};
    display: flex;
`

export const FooterContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height:25vh;


    .social{
        display: flex;
        justify-content: center;
        align-items: center;  
        margin-top:3rem; 
        
        img{
            margin:0 6px;
        }
        
    }


    ul a {
        color:${({ theme }) => theme.colors.color};        
    }
   

    span{
        color:${({ theme }) => theme.colors.color};        

    }

    .button{
        grid-column:4/ 6;
        display: flex;
        justify-content: center;
        align-items: center;

        margin-bottom:3rem; 

    }
`

