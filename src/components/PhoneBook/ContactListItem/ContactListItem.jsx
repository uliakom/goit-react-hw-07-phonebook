import PropTypes from 'prop-types';
import { Container, Wrap } from './ContactListItem.styled';
import { useDeleteContactMutation } from 'redux/api';

const ContactListItem = ({ contact }) => {
  const [deleteContact, { isLoading: removing }] = useDeleteContactMutation();

  return (
    <Container>
      <Wrap>
        <div>
          <p>{contact.name}</p>
        </div>
        <div>
          <p>{contact.phone}</p>
        </div>
      </Wrap>
      <button
        type="button"
        disabled={removing}
        onClick={() => deleteContact(contact.id)}
      >
        Delete
      </button>
    </Container>
  );
};

export default ContactListItem;

ContactListItem.prototype = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
