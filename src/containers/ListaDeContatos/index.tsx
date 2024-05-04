import { useSelector } from 'react-redux'

import Contato from '../../components/Contato'
import { Container, Main, Titulo } from '../../styles'

import { RootReducer } from '../../store'

const ListaDeContatos = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)

  return (
    <Container>
      <Main>
        <Titulo>Meus Contatos:</Titulo>
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
      </Main>
    </Container>
  )
}

export default ListaDeContatos
