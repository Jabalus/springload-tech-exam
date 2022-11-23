import React from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import MultiSelect from "./components/MultiSelect";
import { fields } from "./constants";
import { fieldMapper } from "./helpers/form";
import { useForm } from "./hooks";

function App() {
  const { formValues, errors, changeField, formSubmit, setFormValue } = useForm(
    fields,
    {}
  );

  return (
    <div className="App">
      <div>
        {fieldMapper(fields, formValues, errors, changeField)}
        <Button
          onClick={() => formSubmit(() => console.log(formValues))}
          primary
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

export default App;
