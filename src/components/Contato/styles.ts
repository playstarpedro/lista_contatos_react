import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Card = styled.div`
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 16px;
  margin-bottom: 32px;
  border-radius: 16px;
`

export const NomeCompleto = styled.h2`
  font-size: 18px;
  font-wheight: bold;
  margin-bottom: 16px;
`

export const Email = styled.h3`
  font-size: 14px;
`

export const Telefone = styled.h3`
  font-size: 14px;
  margin-bottom: 8px;
`

export const BarraAcoes = styled.div`
  border-top: 1px solid #496989;
  padding-top: 16px;
`

export const Botao = styled.button`
  font-wheigt: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.azul};
  border-radius: 8px;
  margin-right: 8px;
`
export const BotaoSalvar = styled(Botao)`
  background-color: ${variaveis.verde3};
`
export const BotaoCancelarRemover = styled(Botao)`
  background-color: ${variaveis.vermelho};
`
