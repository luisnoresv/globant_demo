import React, { useEffect, useState } from 'react';
import { Segment, Header, Table } from 'semantic-ui-react';
import ApiService from '../../app/api/apiService';
import LoadingComponent from '../../app/layout/LoadingComponent';

const PresidentsList = () => {
  const [presidents, setPresidents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    ApiService.get()
      .then(presidents => {
        console.log('List of presidents', presidents);
        setPresidents(presidents);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  if (loading)
    return <LoadingComponent content='Loading info...' inverted={false} />;

  return (
    <Segment>
      <Header content='List of Presidents' textAlign='center' />
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>President</Table.HeaderCell>
            <Table.HeaderCell>Birthday</Table.HeaderCell>
            <Table.HeaderCell>Place of Birth</Table.HeaderCell>
            <Table.HeaderCell>Death Day</Table.HeaderCell>
            <Table.HeaderCell>Place of Death</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {presidents &&
            presidents.map(president => (
              <Table.Row key={president.name}>
                <Table.Cell>{president.name}</Table.Cell>
                <Table.Cell>{president.birthday}</Table.Cell>
                <Table.Cell>{president.birthplace}</Table.Cell>
                <Table.Cell>{president.deathday}</Table.Cell>
                <Table.Cell>{president.deathplace}</Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
    </Segment>
  );
};

export default PresidentsList;
