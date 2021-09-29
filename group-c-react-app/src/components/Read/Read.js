import React, { useEffect, useState } from 'react';
import './Read.css';
import { Table, Button } from 'semantic-ui-react';
import axios from 'axios';
import Update from '../Update/Update';
import { Route, Redirect } from 'react-router';
import { Link } from 'react-router-dom';

function Read() {

  const [tableData, setTableData] = useState([]);

  function callMockAPIWithAxiosGET(){
    const endpointURL = "https://6151d18b4a5f22001701d46b.mockapi.io/api/v1/people";
    axios.get(endpointURL)
      .then(response => setTableData(response.data))
      .catch(
        (err) => { console.log(err) }
      );
  }

  useEffect(
    () => {
      callMockAPIWithAxiosGET();
    }
    , []);

  function setPersonData(data) {
    console.log(data.id);
    localStorage.setItem("id", data.id);
    localStorage.setItem("firstName", data.firstName);
    localStorage.setItem("lastName", data.lastName);
  }

  function onDelete(id) {
    const endpointURL = `https://6151d18b4a5f22001701d46b.mockapi.io/api/v1/people/${id}`;
    axios.delete(endpointURL)
      .then(() => callMockAPIWithAxiosGET())
      .catch(
        (err) => { console.log(err) }
      );
  }

  return (
    <div className="Read">
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>ID</Table.HeaderCell>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Update</Table.HeaderCell>
            <Table.HeaderCell>Delete</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {
            tableData.map(data => {
              return (
                <Table.Row>
                  <Table.Cell>{data.id}</Table.Cell>
                  <Table.Cell>{data.firstName}</Table.Cell>
                  <Table.Cell>{data.lastName}</Table.Cell>

                  <Table.Cell>
                    <Link to="/update">
                      <Button color="green" onClick={() => setPersonData(data)}>
                        Update
                      </Button>
                    </Link>
                  </Table.Cell>

                  <Table.Cell>
                    <Link to="/read">
                      <Button color="red" onClick={() => onDelete(data.id)}>
                        Delete
                      </Button>
                    </Link>
                  </Table.Cell>
                </Table.Row>
              )
            })
          }
        </Table.Body>
      </Table>
    </div>
  );
}

export default Read;
