import Contact from '../Contact/Contact'
import styles from './ContactList.module.css'

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={styles.contacts}>
      {contacts.map((contact) => (
        <Contact key={contact.id} data={contact} deleteContact={deleteContact} />
      ))}
    </ul>
  )
}

export default ContactList
