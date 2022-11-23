import React, { useState, ChangeEvent } from "react";
import { InputContainer, StyledInput } from "./styles";

type InputPropTypes = {
  label: string;
  value: any;
  onChange: (val: string) => void;
  fluid?: boolean;
  type: string;
  error?: string;
  readOnly?: boolean;
  maxLength?: number;
};

const Input = ({
  type,
  label,
  value,
  onChange,
  fluid,
  error,
  readOnly,
  maxLength,
}: InputPropTypes) => {
  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    onChange(e.target.value);
  };

  return (
    <InputContainer $fluid={fluid}>
      {label && <label> {label} </label>}
      <StyledInput
        $error={error ? true : false}
        type={type}
        value={value}
        onChange={handleOnChange}
        readOnly={readOnly}
        maxLength={maxLength ? Number(maxLength) : undefined}
      />
      <div className="msg">{error}</div>
    </InputContainer>
  );
};

Input.defaultProps = {
  type: "text",
  error: "",
};

export default Input;
