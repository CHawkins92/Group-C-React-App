import React, { useState, useEffect } from 'react'
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';

function Update() {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [id, setId] = useState(null);

  useEffect(
    () => {
      setId(localStorage.getItem('id'));
      setFirstName(localStorage.getItem('firstName'));
      setLastName(localStorage.getItem('lastName'));
    }, []
  )

  const callMockAPI = () => {
    console.log(id + " " + firstName + " " + lastName);

    const formData = {
      firstName,
      lastName
    }

    const endpointURL = "https://6151d18b4a5f22001701d46b.mockapi.io/api/v1/people/" + id;
    axios.put(endpointURL, formData)
      .then(response => console.log(response.data))
      .catch(err => console.log(err));

  }

  return (
    <div>
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input
            name="firstName"
            placeholder='First Name'
            onChange={e => setFirstName(e.target.value)}
            value={firstName}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            name="lastName"
            placeholder='Last Name'
            onChange={e => setLastName(e.target.value)}
            value={lastName}
          />
        </Form.Field>
        <Button
          type='submit' onClick={callMockAPI}>
          Update
        </Button>
      </Form>
    </div>
  );
}

export default Update;
