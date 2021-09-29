import React, { useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";

function Update() {
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
  const [id, setId] = useState(null);

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setPrefix(localStorage.getItem("prefix"));
    setFirstName(localStorage.getItem("firstName"));
    setLastName(localStorage.getItem("lastName"));
    setTelephoneNumber(localStorage.getItem("telephoneNumber"));
    setAddressLine1(localStorage.getItem("addressLine1"));
    setAddressLine2(localStorage.getItem("addressLine2"));
    setCity(localStorage.getItem("city"));
    setPostcode(localStorage.getItem("postcode"));
    setVehicleType(localStorage.getItem("vehicleType"));
    setEngineSize(localStorage.getItem("engineSize"));
  }, []);

  const callMockAPI = () => {
    console.log(id + " " + firstName + " " + lastName);

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
      "https://6151d18b4a5f22001701d46b.mockapi.io/api/v1/people/" + id;
    axios
      .put(endpointURL, formData)
      .then((response) => console.log(response.data))
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <Form>
        <Form.Field>
          <label>Prefix</label>
          <input
            name="prefix"
            placeholder="Prefix"
            onChange={(e) => setPrefix(e.target.value)}
            value={prefix}
          />
        </Form.Field>
        <Form.Field>
          <label>First Name</label>
          <input
            name="firstName"
            placeholder="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
          />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            name="lastName"
            placeholder="Last Name"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
          />
        </Form.Field>
        <Form.Field>
          <label>Telephone Number</label>
          <input
            name="telephoneNumber"
            placeholder="Telephone Number"
            onChange={(e) => setTelephoneNumber(e.target.value)}
            value={telephoneNumber}
          />
        </Form.Field>
        <Form.Field>
          <label>Address Line 1</label>
          <input
            name="addressLine1"
            placeholder="Address Line 1"
            onChange={(e) => setAddressLine1(e.target.value)}
            value={addressLine1}
          />
        </Form.Field>
        <Form.Field>
          <label>Address Line 2</label>
          <input
            name="addressLine2"
            placeholder="Address Line 2"
            onChange={(e) => setAddressLine2(e.target.value)}
            value={addressLine2}
          />
        </Form.Field>
        <Form.Field>
          <label>City</label>
          <input
            name="city"
            placeholder="City"
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
        </Form.Field>
        <Form.Field>
          <label>Postcode</label>
          <input
            name="postcode"
            placeholder="Postcode"
            onChange={(e) => setPostcode(e.target.value)}
            value={postcode}
          />
        </Form.Field>
        <Form.Field>
          <label>Vehicle Type</label>
          <input
            name="vehicleType"
            placeholder="Vehicle Type"
            onChange={(e) => setVehicleType(e.target.value)}
            value={vehicleType}
          />
        </Form.Field>
        <Form.Field>
          <label>Engine Size</label>
          <input
            name="engineSize"
            placeholder="Engine Size"
            onChange={(e) => setEngineSize(e.target.value)}
            value={engineSize}
          />
        </Form.Field>

        <Button type="submit" onClick={callMockAPI}>
          Update
        </Button>
      </Form>
    </div>
  );
}

export default Update;
