import { ContactListItem } from './ContactList.styled';

export default function ContactList({contacts, onDeleteContact}) {
  return (                                                             
  <ul>
    {contacts.map(({id, name, number}) => (
        <ContactListItem key={id}>
            <p>{name} {number}</p>
            <button onClick={() => onDeleteContact(id)}>Delete</button>
        </ContactListItem>
    ))}
  </ul>
)};