import { createSlice } from '@reduxjs/toolkit'
import initialContacts from 'data/contacts'

const initialState = {
  items: initialContacts
}

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      // state.value += 1
      console.log('addContact')
      console.log('state', state.items)
      console.log('action', action)
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    selectContacts: (state, action) => {
      // state.value += action.payload
      console.log('selectContacts')
      console.log('state', state.items)
      console.log('action', action)
    }
  }
})

export const { addContact, deleteContact, selectContacts } = contactsSlice.actions

export default contactsSlice.reducer
