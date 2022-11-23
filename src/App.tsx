import React from "react";
import Button from "./components/Button";
import Input from "./components/Input";
import MultiSelect from "./components/MultiSelect";
import { fields } from "./constants";
import { useForm } from "./hooks";

function App() {
  const { formValues, errors, changeField, formSubmit, setFormValue } = useForm(
    fields,
    {}
  );

  return (
    <div className="App">
      <div>
        {fields.map(({ key, type, label }) => (
          <Input
            key={key}
            type={type}
            label={label}
            value={formValues[key]}
            onChange={(val) => changeField(key, val)}
            error={errors[key]}
          />
        ))}
        <MultiSelect
          key="country"
          type="dropdown"
          label="Country"
          onChange={(val) => changeField("country", val)}
          value={formValues.country}
          error={errors["country"]}
          options={[
            {
              key: "au",
              label: "Australia",
              value: "Australia",
            },
            {
              key: "nz",
              label: "New Zealand",
              value: "New Zealand",
            },
          ]}
        />
        <Button onClick={formSubmit} primary>
          Submit
        </Button>
      </div>
    </div>
  );
}

export default App;
