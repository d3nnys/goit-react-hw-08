import { useSelector } from 'react-redux';
import { useAutoAnimate } from '@formkit/auto-animate/react';
import { selectContacts } from '../../redux/contacts/selectors';
import Contacts from '../Contact/Contact';
import css from './ContactList.module.css';

export default function ContactList() {
  const [parent] = useAutoAnimate({ easing: 'linear', duration: 300 });
  const contacts = useSelector(selectContacts);

  return (
    <ul ref={parent} className={css.list}>
      {contacts.map(contact => (
        <li className={css.item} key={contact.id}>
          <Contacts {...contact} />
        </li>
      ))}
    </ul>
  );
}
