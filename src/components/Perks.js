import { Container } from "./styles/Container.styled"
import { Grid, Section } from './styles/Perks.styled'
import { HeaderOne } from "./styles/HeaderOne.styled"
import { HeaderThree } from "./styles/HeaderThree.styles"

export const Perks = () => {
  return (
   <>
   <Section>
   <Container>
    <Grid>
      <div>
        <HeaderOne>Why choose EasyBank?</HeaderOne>
        <p>
          We leverage Open Banking to turn your bank account into your financial hub. Control your finances lke never before.
        </p>
      </div>
      <div>
        <img src="./images/icon-online.svg" alt="" />
        <HeaderThree>Online Banking</HeaderThree>
        <p>Our modern web and mobile notifications allow you to keep track of your finances whereever you are in the world.</p>
      </div>
      <div>
        <img src="./images/icon-budgeting.svg" alt="" />
        <HeaderThree>Simple Budgeting</HeaderThree>
        <p>See exactly where your money goes each month. Recieve notifications when you're close to hitting your limits.</p>
      </div>
      <div>
        <img src="./images/icon-onboarding.svg" alt="" />
        <HeaderThree>Fast Onboarding</HeaderThree>
        <p>We don't do branches. Open your account in minutes online and start taking control of your finances right away.</p>
      </div>
      <div>
        <img src="./images/icon-api.svg" alt="" />
        <HeaderThree>Open API</HeaderThree>
        <p>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easiest.</p>
      </div>
    </Grid>
   </Container>
   </Section>
   </>
  )
}
