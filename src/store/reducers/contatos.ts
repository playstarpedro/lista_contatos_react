import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      id: 1,
      nomeCompleto: 'Pedro Souza',
      email: 'pesdro@gmail.com',
      telefone: '11 666 666'
    },
    {
      id: 2,
      nomeCompleto: 'Diogo Souza',
      email: 'diogo@gmail.com',
      telefone: '11 555 555'
    },
    {
      id: 3,
      nomeCompleto: 'Jorge Lafon',
      email: 'lafon@gmail.com',
      telefone: '11 777 777'
    }
  ]
}

const contatoSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (state, action: PayloadAction<Contato>) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )

      if (indexDoContato >= 0) {
        state.itens[indexDoContato] = action.payload
      }
    }
  }
})

export const { remover, editar } = contatoSlice.actions

export default contatoSlice.reducer
