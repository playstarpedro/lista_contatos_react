import { Provider } from 'react-redux'
import Header from './containers/Header'
import ListaDeContatos from './containers/ListaDeContatos'
import EstiloGlobal, { Container } from './styles'

import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Header />
      <Container>
        <ListaDeContatos />
      </Container>
    </Provider>
  )
}

export default App
