import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import ContactForm from 'components/ContactForm/ContactForm'
import SearchBox from 'components/SearchBox/SearchBox'
import ContactList from 'components/ContactList/ContactList'
import initialContacts from 'data/contacts'

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts')
    return savedContacts ? JSON.parse(savedContacts) : initialContacts
  })
  const [search, setSearch] = useState('')

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  const addContact = (contact) => {
    const newContact = {
      ...contact,
      id: nanoid()
    }
    setContacts((prevState) => [...prevState, newContact])
  }

  const deleteContact = (id) => {
    setContacts((prevState) => prevState.filter((contact) => contact.id !== id))
  }

  const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(search.toLocaleLowerCase())
  )

  return (
    <div className='container'>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox search={search} setSearch={setSearch} />
      <ContactList contacts={filteredContacts} deleteContact={deleteContact} />
    </div>
  )
}

export default App
