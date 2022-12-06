// import PropTypes from 'prop-types';
import { ContactItem } from 'components/ContactItem/ContactItem'
import css from './ContactList.module.css'

export const ContactList = ({ contacts, onDeleteContact }) => {
    return (
        <ul>
            {contacts.map((contact) => (
                <li key={contact.id}>
                    <ContactItem contact={contact} onDelete={onDeleteContact} />
                </li>
            ))}
        </ul>
    )
}
// <p className={css.name}>{name} : {number}</p>
//<button onClick={()=> onDeleteContact(id)} type="button" className={css.button}>Delete</button>