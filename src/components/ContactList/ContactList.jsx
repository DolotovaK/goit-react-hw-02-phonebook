// import PropTypes from 'prop-types';
import css from './ContactList.module.css'

export const ContactList = ({contacts, onDeleteContact }) => (
    <ul>
        {contacts.map(({ id, name, number }) => (
            <li key={id} className={css.contact}>
                <p className={css.name}>{name}</p>
                <p>{number}</p>
                <button onClick={()=> onDeleteContact(id)} type="button" className={css.button}>Delete</button>
            </li>
        ))}
    </ul>
)

