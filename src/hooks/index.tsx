import { useState } from "react";
import { getValidationFunc } from "../helpers/validations";

export type GenericObject = {
  [key: string]: any;
};

type UseFormType = {
  formValues: GenericObject;
  errors: GenericObject;
  changeField: (field: string, value: any) => void;
  formSubmit: (onSubmit: (formValues: GenericObject) => void) => void;
  setError: (field: string, value: any) => void;
  setFormValue: (formValues: GenericObject) => void;
};

export type RuleType = {
  type: string;
  length?: number;
  message?: string;
};

export type SingleFieldType = {
  key: string;
  type: string;
  label?: string;
  // rules?: (formValues: GenericObject) => string | GenericObject | undefined;
  rules: RuleType[];
  readOnly?: boolean;
};

export const useForm = (
  fields: SingleFieldType[],
  initialValue?: GenericObject
): UseFormType => {
  const internalInitialValue = fields.reduce((acc, fieldObject) => {
    return {
      ...acc,
      [fieldObject.key]: initialValue?.[fieldObject.key]
        ? initialValue[fieldObject.key]
        : "",
    };
  }, {});

  const [formValues, setFormValue] = useState(internalInitialValue);

  const [errors, setErrors] = useState<GenericObject>({});

  const changeField = (field: string, value: any) =>
    setFormValue((prevForm: any) => ({
      ...prevForm,
      [field]: value,
    }));

  const formSubmit = (onSubmit: (formValues: GenericObject) => void) => {
    let tempErrors = {};
    fields.forEach(({ key, rules }) => {
      const tempErr =
        rules && rules.length > 0
          ? rules
              .map((ruleObj) => getValidationFunc(key, ruleObj, formValues))
              .filter((msg) => msg)
              .join(",")
          : undefined;

      tempErrors = {
        ...tempErrors,
        ...(tempErr && { [key]: tempErr }),
      };
    });

    setErrors(tempErrors);
    if (Object.keys(tempErrors).length === 0) {
      onSubmit(formValues);
    }
  };

  const setError = (field: string, value: any) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: value,
    }));
  };

  return {
    formValues,
    errors,
    changeField,
    setFormValue,
    formSubmit,
    setError,
  };
};
