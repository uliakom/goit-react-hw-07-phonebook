import PropTypes from 'prop-types';
import { Container, Wrap } from './ContactListItem.styled';
import { useNavigate } from 'react-router-dom';
import { useDeleteContactMutation } from 'redux/api';
import { Loader } from 'components/Loader/Loader';

const ContactListItem = ({ contact }) => {
  const [deleteContact, { isLoading: removing }] = useDeleteContactMutation();
  const navigate = useNavigate();
  const { name, phone, id } = contact;

  const openModal = () => {
    Loader();
    navigate(`/contact/${id}`);
  };

  return (
    <Container>
      <Wrap>
        <div>
          <p>{name}</p>
        </div>
        <div>
          <p>{phone}</p>
        </div>
      </Wrap>
      <button
        type="button"
        disabled={removing}
        onClick={() => deleteContact(id)}
      >
        X
      </button>
      <button type="button" disabled={removing} onClick={openModal}>
        Edit
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
