import styled from 'styled-components'

export const Button = styled.button`
    border-radius:50px;
    border:none;
    box-shadow:0 0 10px rgba(0, 0, 0, 0.15);
    cursor: pointer;
    font-size:1em;
    font-weight:500;
    padding:12px 55px;
    background:linear-gradient(
        320deg,
        #2BB7DA 10%,
        #31D35C 75%
    );
    color:#fff;
    transition:all 0.3s ease-in-out;

    &:hover{
        opacity: 0.9;
        transform:scale(0.98);
    }

    @media (max-width: ${({ theme }) => theme.mobile.small}){
            display:none;
      }
`
