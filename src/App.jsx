import { useEffect, useState } from 'react'
import ContactForm from 'components/ContactForm/ContactForm'
import SearchBox from 'components/SearchBox/SearchBox'
import ContactList from 'components/ContactList/ContactList'
import initialContacts from 'data/contacts'

const App = () => {
  const [contacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts')
    return savedContacts ? JSON.parse(savedContacts) : initialContacts
  })
  const [search, setSearch] = useState('')

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])

  // const filteredContacts = contacts.filter(({ name }) =>
  //   name.toLowerCase().includes(search.toLocaleLowerCase())
  // )

  return (
    <div className='container'>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox search={search} setSearch={setSearch} />
      <ContactList />
    </div>
  )
}

export default App
