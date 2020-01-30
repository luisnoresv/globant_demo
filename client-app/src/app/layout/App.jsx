import React from 'react';
import { Container } from 'semantic-ui-react';
import PresidentsList from '../../features/Presidents/PresidentsList';

const App = () => {
  return (
    <Container className='main'>
      <PresidentsList />
    </Container>
  );
};

export default App;
