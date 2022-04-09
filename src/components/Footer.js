import React from 'react'
import { Container } from './styles/Container.styled'
import { FooterOuter, FooterContainer } from './styles/Footer.styled'
import { Button } from './styles/Button.styled'

export const Footer = () => {
  return (
    <>
<FooterOuter>
    <Container>
        <FooterContainer>
            <div className="social-container">
            <img src="./images/logo.svg" alt="" />
            <div className="social">
                <img src="./images/icon-facebook.svg" alt="" />
                <img src="./images/icon-youtube.svg" alt="" />
                <img src="./images/icon-twitter.svg" alt="" />
                <img src="./images/icon-pinterest.svg" alt="" />
                <img src="./images/icon-instagram.svg" alt="" />
            </div>
            </div>
            <ul className="list">
                <li> <a href="">about</a></li>
                <li> <a href="">contact</a></li>
                <li> <a href="">blog</a></li>
            </ul>
            <ul className="list">
                 <li> <a href="">careers</a></li>
                <li> <a href="">support</a></li>
                <li> <a href="">privacy policy</a></li>
            </ul>
            <div className="button-container">
            <div className='button'>
            <Button>Request Invite</Button>
            </div>
            <span>&copy;EasyBank. All Rights Reserved</span> 
            </div>
        </FooterContainer>
    </Container>
    </FooterOuter>
    </>
  )
}
