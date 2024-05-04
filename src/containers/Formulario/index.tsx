import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'

import { Container, Main, Titulo, Campo, BotaoSalvar } from '../../styles'
import { Form } from './styles'
import Contato from '../../models/Contato'
import { cadastrar } from '../../store/reducers/contatos'

const Formulario = () => {
  const dispatch = useDispatch()
  const [nomeCompleto, setNomeCompleto] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()
    const contatoParaAdicionar = new Contato(nomeCompleto, email, telefone, 9)
    dispatch(cadastrar(contatoParaAdicionar))
  }

  return (
    <Container>
      <Main>
        <Titulo>Novo Contato:</Titulo>
        <Form>
          <Campo
            value={nomeCompleto}
            onChange={({ target }) => setNomeCompleto(target.value)}
            type="text"
            placeholder="Nome Completo"
          />
          <Campo
            value={email}
            onChange={({ target }) => setEmail(target.value)}
            type="email"
            placeholder="Email"
          />
          <Campo
            value={telefone}
            onChange={({ target }) => setTelefone(target.value)}
            type="tel"
            placeholder="Telefone(Celular)"
          />
          <BotaoSalvar onClick={cadastrarContato} type="submit">
            Cadastrar
          </BotaoSalvar>
        </Form>
      </Main>
    </Container>
  )
}

export default Formulario
