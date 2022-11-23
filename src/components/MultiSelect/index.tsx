import React, { useState, ChangeEvent, useRef, useEffect } from "react";
import { MdExpandMore } from "react-icons/md";
import { InputContainer } from "../Input/styles";
import { StyledDropdownBox } from "./styles";

type OptionType = {
  key: string;
  label: string;
  value: string;
};
type MultiSelectPropTypes = {
  label: string;
  value: any;
  onChange: (val: string[]) => void;
  fluid?: boolean;
  type: string;
  error?: string;
  readOnly?: boolean;
  maxLength?: number;
  options: OptionType[];
};

const MultiSelect = ({
  label,
  value,
  onChange,
  fluid,
  error,
  options,
}: // readOnly,
MultiSelectPropTypes) => {
  const [isOpen, setOpen] = useState(false);

  const dropdownRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const triggerRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const listener = (event: any) => {
      const isInside =
        !dropdownRef.current ||
        dropdownRef.current.contains(event.target) ||
        triggerRef.current.contains(event.target);
      if (isInside) {
        return;
      }
      setOpen(false);
    };

    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [dropdownRef]);

  const handleSelect = (val: string) => {
    onChange([value, val]);

    if (value && Array.isArray(value)) {
      onChange([...value, val]);
    } else {
      onChange([val]);
    }
    setOpen(false);
  };

  return (
    <InputContainer $fluid={fluid}>
      {label && <label> {label} </label>}
      <StyledDropdownBox
        ref={triggerRef}
        $error={error ? true : false}
        $open={isOpen}
      >
        <div className="display" onClick={() => setOpen(!isOpen)}>
          <div className="value-container">{value}</div>
          <MdExpandMore />
        </div>
        <div ref={dropdownRef} className="dropdown-menu">
          {options
            .filter((option) => !value?.includes(option.value))
            .map(({ key, label, value: valueString }) => (
              <div
                className="option"
                key={key}
                onClick={() => handleSelect(valueString)}
              >
                {label}
              </div>
            ))}
        </div>
      </StyledDropdownBox>
      <div className="msg">{error}</div>
    </InputContainer>
  );
};

MultiSelect.defaultProps = {
  type: "text",
  error: "",
};

export default MultiSelect;
