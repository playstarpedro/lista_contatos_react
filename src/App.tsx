import Header from './containers/Header'
import ListaDeContatos from './containers/ListaDeContatos'
import EstiloGlobal, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobal />
      <Header />
      <Container>
        <ListaDeContatos />
      </Container>
    </>
  )
}

export default App
