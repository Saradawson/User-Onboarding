import React, { useState } from "react";
import BandMateForm from "./components/Form";
import schema from "./validation/formSchema";

function App() {
  const [bandMates, setBandMates] = useState([]);
  const [values, setValues] = useState({fullname: '', email: '', password: '', terms: false})

  const onChange = (inputName, inputValue) => {
    setValues({ ...values, [inputName]: inputValue });
  }

  const submitForm = () => {
    setBandMates([values, ...bandMates]);
    setValues({fullname: '', email: '', password: '', terms: false});
  }
  return (
    <div className="App">
      <h1>Find Bandmates</h1>
     <BandMateForm
       values={values}
       update={onChange}
       submit={submitForm}
     />
     {bandMates.map((bandmate, idx) => {
       console.log(bandmate.fullname, bandmate.email, bandmate.password, bandmate.terms)
     })}
    </div>
  );
}

export default App;
