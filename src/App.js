import { Container } from './components/styles/Container.styled'
import Header from './components/Header'
import GlobalStyles from './components/styles/Global'
import { ThemeProvider } from 'styled-components'
import { Hero } from './components/Hero'

const theme = {
  colors: {
    header: '#fff',
    body: '#dbdbdb',
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
    </>
    </ThemeProvider>
  );
}

export default App;
