import BotaoAdicionar from '../../components/BotaoAdicionar'
import Header from '../../containers/Header'
import ListaDeContatos from '../../containers/ListaDeContatos'
import { Container } from '../../styles'

const Home = () => (
  <>
    <Header />
    <Container>
      <ListaDeContatos />
    </Container>
    <BotaoAdicionar />
  </>
)

export default Home
