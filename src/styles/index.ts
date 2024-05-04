import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'
import { Botao } from '../components/Contato/styles'

const EstiloGlobal = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none
}

body {
  background-color: ${variaveis.azul};
}
`

export const Container = styled.div`
  max-width: 1024px;
  margin: 0 auto;
`

export const Main = styled.main`
  background-color: ${variaveis.verde1};
  padding: 36px;
  border-radius: 8px;
  max-width: 960px;
  margin: 0 auto;
  margin-top: 32px;
  overflow-y: scroll;
  height: 100vh;
`
export const Titulo = styled.h2`
  display: block;
  margin-top: 16px;
  margin-bottom: 16px;
  font-size 18px;
  font-weight: bold;
`
export const Campo = styled.input`
  border-radius: 8px;
  padding: 8px;
  backfround-color: #fff;
  font-weight: bold;
  color: ${variaveis.azul};
  border-color: ${variaveis.azul};
  width: 90%;
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde3};
`
export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`

export default EstiloGlobal
