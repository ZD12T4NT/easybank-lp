import React from 'react'
import { StyledHeader, Nav, Logo, List} from './styles/Header.styled'
import { Container } from './styles/Container.styled'
import { Button } from './styles/Button.styled'


export const Header = () => {
  return (
    <StyledHeader>
      <Container>
      <Nav>
        <Logo src='./images/logo.svg' alt=''/>
        <List>
          <li> <a href="">home</a></li>
          <li> <a href="">about</a></li>
          <li> <a href="">contact</a></li>
          <li> <a href="">blog</a></li>
          <li> <a href="">careers</a></li>
        </List>
        <Button>Request Invite</Button>
      </Nav>
      </Container>
    </StyledHeader>
  )
}

export default Header
