import { RuleType } from "../hooks";

export const required = (formValues: any, key: string, message?: string ) => {
  if (formValues[key]) {
    return undefined;
  }
  return message ? message : 'required';
}

export const email = (formValues: any, key: string, message?: string ) => {
  if (/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(formValues[key])) {
    return undefined
  }
  return message ? message : 'must be a valid email e.g. abc@def.xyz';
}

export const getValidationFunc = (key: string, ruleObj: RuleType, formValues: any) => {
  if (ruleObj.type === 'email'){
   return email(formValues, key, ruleObj.message)
  }
  return undefined
}