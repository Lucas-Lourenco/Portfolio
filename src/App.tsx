import './styles/GlobalStyle/index.css'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Container from './components/Container'
import Footer from './components/Footer'

function App() {


  return (
    <>
      <Container>



      <Header />
      <About  />
      <Projects/>
      <Skills/>
      <Footer/>
      </Container>
    </>
  )
}

export default App
