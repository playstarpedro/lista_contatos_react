import Contato from '../../components/Contato'
import ListaDeContatosStyle, { Container } from './styles'

const contatos = [
  {
    nomeCompleto: 'Pedro Souza',
    email: 'pedrosozua@email.com',
    telefone: '666 666'
  },
  {
    nomeCompleto: 'Joao Souza',
    email: 'joaosozua@email.com',
    telefone: '999 999'
  },
  {
    nomeCompleto: 'Carlos Souza',
    email: 'carlos@email.com',
    telefone: '516 516'
  }
]

const ListaDeContatos = () => (
  <Container>
    <ListaDeContatosStyle>
      <h2>Meus contatos</h2>
      <ul>
        {contatos.map((c) => (
          <li key={c.nomeCompleto}>
            <Contato
              nomeCompleto={c.nomeCompleto}
              email={c.email}
              telefone={c.telefone}
            />
          </li>
        ))}
      </ul>
    </ListaDeContatosStyle>
  </Container>
)

export default ListaDeContatos
