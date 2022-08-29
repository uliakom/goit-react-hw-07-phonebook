import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
const Home = lazy(() => import('pages/Home'));
const Modal = lazy(() => import('components/Modal'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="contact/:contactId" element={<Modal />}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default App;
