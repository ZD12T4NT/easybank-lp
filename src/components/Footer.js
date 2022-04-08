import React from 'react'
import { Container } from './styles/Container.styled'
import { FooterOuter, FooterContainer } from './styles/Footer.styled'

export const Footer = () => {
  return (
    <>
    <Container>
        <FooterOuter>
        <FooterContainer>
            <div className="social">
                <img src="./images/logo.svg" alt="" />
                <img src="./images/icon-facebook.svg" alt="" />
                <img src="./images/icon-youtube.svg" alt="" />
                <img src="./images/icon-twitter.svg" alt="" />
                <img src="./images/icon-pinterest.svg" alt="" />
                <img src="./images/icon-instagram.svg" alt="" />
            </div>
        </FooterContainer>
        </FooterOuter>
    </Container>
    </>
  )
}
