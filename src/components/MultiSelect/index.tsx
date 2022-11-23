import React, { useState, useRef, useEffect } from "react";
import { MdClose, MdExpandMore } from "react-icons/md";
import { InputContainer } from "../Input/styles";
import { Pill, StyledDropdownBox } from "./styles";

type OptionType = {
  key: string;
  label: string;
  value: string;
};
type MultiSelectPropTypes = {
  label: string;
  value: any;
  onChange: (val: string[] | string) => void;
  fluid?: boolean;
  type: string;
  error?: string;
  readOnly?: boolean;
  options: OptionType[];
  singleSelect?: boolean;
};

const MultiSelect = ({
  label,
  value,
  onChange,
  fluid,
  error,
  options,
  singleSelect,
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
      if (singleSelect) {
        onChange([val]);
      } else {
        onChange([...value, val]);
      }
    } else {
      onChange([val]);
    }
    setOpen(false);
  };

  const handleRemove = (val: string) => {
    onChange(value.filter((currVal: string) => currVal !== val));
  };

  const displayedOptions = options.filter(
    (option) => !value?.includes(option.value)
  );
  return (
    <InputContainer $fluid={fluid}>
      {label && <label> {label} </label>}
      <StyledDropdownBox
        ref={triggerRef}
        $error={error ? true : false}
        $open={isOpen}
      >
        <div className="display" onClick={() => setOpen(!isOpen)}>
          <div className="value-container">
            {value &&
              value.map((val: string) => (
                <Pill key={val}>
                  {options.find((opt) => opt.value === val)?.label}{" "}
                  {!singleSelect && (
                    <MdClose onClick={() => handleRemove(val)} />
                  )}
                </Pill>
              ))}
          </div>
          <MdExpandMore />
        </div>
        <div ref={dropdownRef} className="dropdown-menu">
          {displayedOptions.length > 0
            ? displayedOptions.map(({ key, label, value: valueString }) => (
                <div
                  className="option"
                  key={key}
                  onClick={() => handleSelect(valueString)}
                >
                  {label}
                </div>
              ))
            : "No more options"}
        </div>
      </StyledDropdownBox>
      <div className="msg">{error}</div>
    </InputContainer>
  );
};

export default MultiSelect;
