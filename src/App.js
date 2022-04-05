import { Container } from './components/styles/Container.styled'
import Header from './components/Header'
import GlobalStyles from './components/styles/Global'
import { ThemeProvider } from 'styled-components'
import { Hero } from './components/Hero'
import { Perks } from './components/Perks'

const theme = {
  colors: {
    header: '#fff',
    body: '#fff',
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
        <Perks />
      </Container>
    </>
    </ThemeProvider>
  );
}

export default App;
