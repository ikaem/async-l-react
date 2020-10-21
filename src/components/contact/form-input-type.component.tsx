import React from "react";
import styled from "styled-components";

interface FormInputTypeProps {
  inputValue: string;
  type: string;
  name: string;
  required?: boolean;
  //
  onSetTouched: React.Dispatch<React.SetStateAction<boolean>>;
  onHandleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const FormInputType: React.FC<FormInputTypeProps> = ({
  inputValue,
  type,
  name,
  required,
  onSetTouched,
  onHandleInputChange,
}) => {
  return (
    <FormInputTypeStyled
      className="form-input_input-field"
      type={type}
      name={name}
      id={name}
      required={required}
      value={inputValue}
      onChange={onHandleInputChange}
      onFocus={() => onSetTouched(true)}
    />
  );
};

export default FormInputType;

const FormInputTypeStyled = styled.input`
  width: 100%;
  display: block;
  background-color: transparent;
  border-bottom: 1px solid var(--gray);
  padding: 0.5rem;

  :focus + label {
    top: -0.5rem;
    font-size: 0.75rem;
    color: var(--darkGray);
  }
`;
