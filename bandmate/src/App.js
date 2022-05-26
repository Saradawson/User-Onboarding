import React, { useState } from "react";
import BandMateForm from "./components/Form";
import './App.css';
import schema from "./validation/formSchema";
import * as yup from 'yup';
import axios from 'axios';

const initialFormValues = {
  username: '',
  password: '',
  email: '',
  terms: false
}

const initialFormErrors = {
  username: '',
  password: '',
  email: '',
  terms: ''
}

function App() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [bandMates, setBandMates] = useState([]);

  const onChange = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  }

  const submitForm = () => {
    axios.post('https://reqres.in/api/users', formValues)
    .then(res => {
      setBandMates([ res.data, ...bandMates])
    })
    .catch(err => console.error(err))
    .finally(() => setFormValues(initialFormValues))
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  return (
    <div className="App">
      <h1>Find Bandmates</h1>
     <BandMateForm
       values={formValues}
       update={onChange}
       submit={submitForm}
       errors={formErrors}
     />
     {bandMates.map(mate => {
       <div key={mate.id}>
         <p>{mate.createdAt}</p>
         <p>{mate.email}</p>
       </div>
     })}
    </div>
  );
}

export default App;
