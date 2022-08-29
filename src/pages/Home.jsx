import { Container, Title, SubTitle } from './Home.styled';
import ContactForm from 'components/ContactForm';
import { Suspense } from 'react';
import PhoneBook from 'components/PhoneBook';
import Filter from 'components/Filter';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

const Home = () => {
  return (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <SubTitle>Contacts</SubTitle>
      <Filter />
      <PhoneBook />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Home;
