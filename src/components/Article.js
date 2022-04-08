import { Container } from "./styles/Container.styled";
import { HeaderOne } from "./styles/HeaderOne.styled"
import { HeaderThree } from "./styles/HeaderThree.styles"
import { ArticleContainer, ArticleSection} from "./styles/Article.styles";

export const Article = () => {
  return (
    <>
    <ArticleSection>
    <Container>
    <HeaderOne>Latest Articles</HeaderOne>
    <ArticleContainer>
      <div className="card">
        <div className="card-img card-one">
        </div>
        <div className="card-text">
        <span>By Claire Robinson</span>
        <HeaderThree>Online Banking</HeaderThree>
        <p>Our modern web and mobile notifications allow you to keep track of your finances whereever you are in the world.</p>
        </div>
      </div>
      <div className="card">
        <div className="card-img card-two">
        </div>
        <div className="card-text">
        <span>By Claire Robinson</span>
        <HeaderThree>Simple Budgeting</HeaderThree>
        <p>See exactly where your money goes each month. Recieve notifications when you're close to hitting your limits.</p>
        </div>
      </div>
      <div className="card">
        <div className="card-img card-three">
        </div>
        <div className="card-text">
        <span>By Claire Robinson</span>
        <HeaderThree>Fast Onboarding</HeaderThree>
        <p>We don't do branches. Open your account in minutes online and start taking control of your finances right away.</p>
        </div>
      </div>
      <div className="card">
        <div className="card-img card-four"> 
        </div>
        <div className="card-text">
        <span>By Claire Robinson</span>
        <HeaderThree>Open API</HeaderThree>
        <p>Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easiest.</p>
        </div>       
      </div>
    </ArticleContainer>
    </Container>
    </ArticleSection>
    </>
  )
}
