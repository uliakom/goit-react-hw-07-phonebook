import ContactListItem from './ContactListItem';
import { Container, ContactList } from './PhoneBook.styled';
import { useSelector } from 'react-redux';
import { getContacts, getFilterValue } from 'redux/selectors';

const PhoneBook = () => {
  const contacts = useSelector(getContacts);
  const filterValue = useSelector(getFilterValue);

  const filteredItems = filterValue
    ? contacts.filter(({ name }) =>
        name.toLowerCase().includes(filterValue.toLowerCase().trim())
      )
    : contacts;

  return (
    <Container>
      <ContactList>
        {filteredItems.map(contact => (
          <ContactListItem key={contact.id} contact={contact} />
        ))}
      </ContactList>
    </Container>
  );
};

export default PhoneBook;
