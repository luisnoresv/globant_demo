import React, { useEffect, useState } from 'react';
import { Segment, Header, Table, Icon, Popup } from 'semantic-ui-react';
import { toast } from 'react-toastify';
import ApiService from '../../app/api/apiService';
import LoadingComponent from '../../app/layout/LoadingComponent';

const PresidentsList = () => {
  const [presidents, setPresidents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState('ASC');

  useEffect(() => {
    setLoading(true);
    ApiService.get(order)
      .then(presidents => {
        setPresidents(presidents);
        setLoading(false);
      })
      .catch(error => {
        setLoading(false);
        toast.error(error);
      });
  }, [order]);

  const handleSorting = () => {
    switch (order) {
      case 'ASC':
        setOrder('DESC');
        break;
      default:
        setOrder('ASC');
        break;
    }
  };

  if (loading)
    return <LoadingComponent content='Loading info...' inverted={false} />;

  return (
    <Segment>
      <Header content='List of Presidents' textAlign='center' />
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>
              President{' '}
              <Popup
                trigger={
                  // eslint-disable-next-line react/jsx-wrap-multilines
                  <Icon
                    name={order === 'ASC' ? 'angle down' : 'angle up'}
                    onClick={handleSorting}
                  />
                }
                content={
                  order === 'ASC' ? 'Order by descending' : 'Order by ascending'
                }
                inverted
              />
            </Table.HeaderCell>
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
