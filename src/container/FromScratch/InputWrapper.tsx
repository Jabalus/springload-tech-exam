import React, { useEffect } from "react";
import Input from "../../components/Input";

type InputWrapperPropTypes = {
  fieldName: string;
  label: string;
  value: any;
  onChange: (val: any) => void;
  fluid?: boolean;
  type: string;
  error?: string;
  readOnly?: boolean;
  maxLength?: number;
  setError: (field: string, value: any) => void;
};

const InputWrapper = (props: InputWrapperPropTypes) => {
  useEffect(() => {
    return () => {
      props.setError(props.fieldName, undefined);
      props.onChange("");
    };
  }, []);
  return <Input {...props} />;
};

export default InputWrapper;
