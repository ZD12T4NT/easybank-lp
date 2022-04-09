import { Container } from './components/styles/Container.styled'
import Header from './components/Header'
import GlobalStyles from './components/styles/Global'
import { ThemeProvider } from 'styled-components'
import { Hero } from './components/Hero'
import { Perks } from './components/Perks'
import { Article } from './components/Article'
import { Footer } from './components/Footer'


const theme = {
  colors: {
    header: '#fff',
    body: '#fff',
    color: 'hsl(0, 0%, 68%)',
    footer: 'hsl(233, 26%, 24%)'
  },
}

function App() {
  return (
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyles/>
    <Header/>
      <Container>
        <Hero />
      </Container>
      <Perks />
      <Article />
      <Footer />
    </>
    </ThemeProvider>
  );
}

export default App;
