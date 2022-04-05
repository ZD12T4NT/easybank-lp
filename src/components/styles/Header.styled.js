import styled from 'styled-components';


export const StyledHeader = styled.header`
      background-color:${({ theme }) => theme.colors.header};
      padding: 8px 0;
      display: flex;
      align-items:center;
`

export const Nav = styled.nav`
      display: flex;
      justify-content: space-between;
      align-items: center;

`

export const Logo = styled.img`
      
`

export const List = styled.ul`
      display: flex;
      justify-content: center;
      align-items: center;
      list-style:none;

      li{
            padding:0 20px;

            a{
            text-decoration:none;
            text-transform:capitalize;
            color:hsl(0, 0%, 60%);
            border-bottom: 4px solid transparent;
            padding: 20px 0;
        
            &:hover{
                  border-bottom:4px solid;
                  border-image: linear-gradient(45deg, #2BB7DA, #31D35C) 1
             }

             &:active{
                   border-bottom:4px solid;
                   border-image: linear-gradient(45deg, #2BB7DA, #31D35C) 1
             }
            }
      }
`


export const Image = styled.img`
    position:absolute;  
    margin-left:40px;
    top:0;
    right:0;
    z-index: -1;
    transform:translateY(-60px) translateX(130px);
`
