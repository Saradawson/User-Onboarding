import React, { useState } from "react";
import Form from "./components/Form";

function App() {
  const[values, setValues] = useState([
    {
        first_name: 'Sara',
        last_name: 'Nan',
        email: 'snal@gmail.com',
        password: 'fdsajkl;',
        terms: true,
    }
])

const handlerChange = (evt) => {
  const name = evt.target.name;
  const value = evt.target.type === 'checkbox' ? evt.target.checked : evt.target.value;

  setValues({...values, [name]: value});
}

  return (
    <div className="App">
      <header className="App-header">
        <h1>Be a User of My Website</h1>
      </header>
      <section>
        <Form 
          values={values}
          handlerChange={handlerChange}
        />
      </section>
    </div>
  );
}

export default App;
