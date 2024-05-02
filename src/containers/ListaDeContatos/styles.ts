import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Container = styled.main`
  padding: 0 40px;
  height: 100vh;
  overflow-y: scroll;
`

const ListaDeContatosStyled = styled.div`
  background-color: ${variaveis.verde1};
  padding: 36px;
  border-radius: 8px;
`

export default ListaDeContatosStyled
