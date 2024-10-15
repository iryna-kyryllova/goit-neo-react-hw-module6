import { useSelector, useDispatch } from 'react-redux'
import { selectContacts, deleteContact } from '../../redux/contactsSlice'
import Contact from '../Contact/Contact'
import styles from './ContactList.module.css'

const ContactList = () => {
  const items = useSelector(selectContacts)
  const dispatch = useDispatch()

  const deleteContactHandler = (id) => {
    dispatch(deleteContact(id))
  }

  return (
    <ul className={styles.contacts}>
      {items.map((contact) => (
        <Contact key={contact.id} data={contact} deleteContact={deleteContactHandler} />
      ))}
    </ul>
  )
}

export default ContactList
