import React, { useState } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";

function Create() {
  const [prefix, setPrefix] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telephoneNumber, setTelephoneNumber] = useState("");
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setPostcode] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [engineSize, setEngineSize] = useState("");

  const callMockAPI = () => {
    console.log(prefix + " " + firstName + " " + lastName);

    const formData = {
      prefix,
      firstName,
      lastName,
      telephoneNumber,
      addressLine1,
      addressLine2,
      city,
      postcode,
      vehicleType,
      engineSize,
    };

    const endpointURL =
      "https://6151d18b4a5f22001701d46b.mockapi.io/api/v1/people";
    axios
      .post(endpointURL, formData)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Form>
        <Form.Field>
          <label>Prefix</label>
          <input
            placeholder="Prefix"
            onChange={(e) => setPrefix(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>First Name</label>
          <input
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Telephone Number</label>
          <input
            placeholder="Telephone NUmber"
            onChange={(e) => setTelephoneNumber(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Address Line 1</label>
          <input
            placeholder="Address Line 1"
            onChange={(e) => setAddressLine1(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Address Line 2</label>
          <input
            placeholder="Address Line 2"
            onChange={(e) => setAddressLine2(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>City</label>
          <input placeholder="City" onChange={(e) => setCity(e.target.value)} />
        </Form.Field>
        <Form.Field>
          <label>Postcode</label>
          <input
            placeholder="Postcode"
            onChange={(e) => setPostcode(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Vehicle Type</label>
          <input
            placeholder="Vehicle Type"
            onChange={(e) => setVehicleType(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Engine Size</label>
          <input
            placeholder="Engine Size"
            onChange={(e) => setEngineSize(e.target.value)}
          />
        </Form.Field>

        <Button type="submit" onClick={callMockAPI}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Create;
