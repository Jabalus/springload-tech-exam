import React from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import { fieldMapper } from "../../helpers/form";
import { useForm } from "../../hooks";
import { fields, tigerObj } from "./constants";
import InputWrapper from "./InputWrapper";

const FromScratch = () => {
  const {
    formValues,
    errors,
    changeField,
    formSubmit,
    setFormValue,
    setError,
  } = useForm([...fields, tigerObj], {});

  const hasTiger = formValues && formValues?.animals.includes("Tiger");

  return (
    <div>
      {fieldMapper(fields, formValues, errors, changeField)}
      {hasTiger && (
        <InputWrapper
          fieldName={tigerObj.key}
          type={tigerObj.type}
          label={tigerObj.label}
          value={formValues[tigerObj.key]}
          onChange={(val) => changeField(tigerObj.key, val)}
          error={errors[tigerObj.key]}
          setError={setError}
        />
      )}
      <Button onClick={() => formSubmit(() => console.log(formValues))} primary>
        Submit
      </Button>
    </div>
  );
};

export default FromScratch;
