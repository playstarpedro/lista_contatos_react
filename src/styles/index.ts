import styled, { createGlobalStyle } from 'styled-components'
import variaveis from './variaveis'

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

export default EstiloGlobal
