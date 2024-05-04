import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import ListaDeContatosStyle, { Container } from './styles'

import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <Container>
      <ListaDeContatosStyle>
        <ul>
          {itens.map((c) => (
            <li key={c.nomeCompleto}>
              <Contato
                id={c.id}
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
