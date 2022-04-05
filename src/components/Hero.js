import React from 'react'
import { Button } from './styles/Button.styled'
import { Container } from './styles/Container.styled'
import { Flex } from './styles/Flex.styles'
import { Image } from './styles/Header.styled'
import { ImageSvg } from './styles/Hero.styled'

export const Hero = () => {
  return (
      <>
    <Container>
    <Flex>
        <div>
        <h1>Next generation digital banking</h1>
        <p>
          Take your financial life online. Your EasyBank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more
        </p>
        <Button>Request Invite</Button>
        </div>
        <Image src="./images/image-mockups.png" alt="" />
        <ImageSvg src='./images/bg-intro-desktop.svg' />
      </Flex>
    </Container>
    </>
  )
}
