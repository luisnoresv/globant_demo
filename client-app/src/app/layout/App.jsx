import React from 'react';
import { ToastContainer } from 'react-toastify';
import { Container } from 'semantic-ui-react';
import PresidentsList from '../../features/Presidents/PresidentsList';

const App = () => {
  return (
    <Container>
      <ToastContainer position='bottom-right' />
      <PresidentsList />
    </Container>
  );
};

export default App;
