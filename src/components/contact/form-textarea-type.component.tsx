import React from "react";
import styled from "styled-components";

interface FormTextareaTypeProps {
  inputValue: string;
  name: string;
  required?: boolean;
  //
  onSetTouched: React.Dispatch<React.SetStateAction<boolean>>;
  onHandleInputChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

const FormTextareaType: React.FC<FormTextareaTypeProps> = ({
  inputValue,
  name,
  required,
  onSetTouched,
  onHandleInputChange,
}) => {
  return (
    <FormTextareaTypeStyled
      className="form-input_input-field"
      name={name}
      id={name}
      required={required}
      rows={5}
      value={inputValue}
      onChange={onHandleInputChange}
      onFocus={() => onSetTouched(true)}
    />
  );
};

export default FormTextareaType;

const FormTextareaTypeStyled = styled.textarea`
  width: 100%;
  display: block;
  background-color: transparent;
  border-bottom: 1px solid var(--gray);
  padding: 0.5rem;
  resize: none;

  :focus + label {
    top: -0.5rem;
    font-size: 0.75rem;
    color: var(--darkGray);
  }
`;
