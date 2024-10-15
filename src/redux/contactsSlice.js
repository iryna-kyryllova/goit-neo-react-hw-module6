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
      state.items.push(action.payload)
    },
    deleteContact: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    }
  }
})

// state.items = state.items.filter((item) =>
//   item.name.toLowerCase().includes(action.payload.toLowerCase())
// )

export const selectContacts = (state) => state.contacts.items

export const { addContact, deleteContact } = contactsSlice.actions

export default contactsSlice.reducer
