import Input from "../components/Input";
import MultiSelect from "../components/MultiSelect";
import { RuleType, SingleFieldType } from "../hooks";

export const required = (formValues: any, key: string, message?: string) => {
  if (formValues[key]) {
    return undefined;
  }
  return message ? message : "required";
};

export const email = (formValues: any, key: string, message?: string) => {
  if (/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(formValues[key])) {
    return undefined;
  }
  return message ? message : "must be a valid email e.g. abc@def.xyz";
};

export const minLen = (
  formValues: any,
  key: string,
  length: number,
  message?: string
) => {
  if (formValues[key] && formValues[key].length > length) {
    return undefined;
  }
  return message ? message : "must be longer";
};

export const getValidationFunc = (
  key: string,
  ruleObj: RuleType,
  formValues: any
) => {
  if (ruleObj.type === "required") {
    return required(formValues, key, ruleObj.message);
  }

  if (ruleObj.type === "email") {
    return email(formValues, key, ruleObj.message);
  }

  if (ruleObj.type === "minLen" && ruleObj.length) {
    return minLen(formValues, key, ruleObj.length, ruleObj.message);
  }

  if (ruleObj.type === "custom" && ruleObj.validate) {
    return ruleObj.validate(formValues, key, ruleObj.message);
  }

  return undefined;
};

export const fieldMapper = (
  fields: SingleFieldType[],
  formValues: any,
  errors: any,
  changeField: (key: string, val: any) => void
) => {
  return fields.map(({ key, type, label, options }: SingleFieldType) => {
    if (type === "singleselect" && options) {
      return (
        <MultiSelect
          key={key}
          type={type}
          label={label}
          onChange={(val) => changeField(key, val)}
          value={formValues[key]}
          error={errors[key]}
          options={options}
          singleSelect
        />
      );
    }
    if (type === "multiselect" && options) {
      return (
        <MultiSelect
          key={key}
          type={type}
          label={label}
          onChange={(val) => changeField(key, val)}
          value={formValues[key]}
          error={errors[key]}
          options={options}
        />
      );
    }
    return (
      <Input
        key={key}
        type={type}
        label={label}
        value={formValues[key]}
        onChange={(val) => changeField(key, val)}
        error={errors[key]}
      />
    );
  });
};
