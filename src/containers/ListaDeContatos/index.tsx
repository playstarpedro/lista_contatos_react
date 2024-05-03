import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import ListaDeContatosStyle, { Container } from './styles'

import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { contatos } = useSelector((state: RootReducer) => state)

  return (
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
}

export default ListaDeContatos
