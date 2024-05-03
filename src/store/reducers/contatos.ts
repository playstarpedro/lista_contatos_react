import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'

const contatoSlice = createSlice({
  name: 'contatos',
  initialState: [
    new Contato('Pedro Costa', 'pedrocosta@email.com', '666 666 666', 1),
    new Contato('Diego Fernandes', 'diego@email.com', '666 666 666', 2),
    new Contato('Gabriel Silva', 'gabriel@email.com', '666 666 666', 3)
  ],
  reducers: {
    remover: (state, action: PayloadAction<number>) =>
      (state = state.filter((contato) => contato.id !== action.payload))
  }
})

export const { remover } = contatoSlice.actions

export default contatoSlice.reducer
