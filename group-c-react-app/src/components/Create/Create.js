import React, { useState } from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';

function Create() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const callMockAPI = () => {
    console.log(firstName + " " + lastName);

    const formData = {
      firstName,
      lastName
    }

    const endpointURL = "https://6151d18b4a5f22001701d46b.mockapi.io/api/v1/people";
    axios.post(endpointURL, formData)
        .then(response => console.log(response.data))
        .catch(err => console.log(err));

  }

  return (
    <div>
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input placeholder='First Name' onChange={e => setFirstName(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input placeholder='Last Name' onChange={e => setLastName(e.target.value)} />
        </Form.Field>
        <Button
          type='submit' onClick={callMockAPI}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Create;
