import React, { useState, useEffect } from "react";
import styled from "styled-components";

import FormInputType from "./form-input-type.component";
import FormTextareaType from "./form-textarea-type.component";

interface FormInputProps {
  label: string;
  isTextarea?: boolean;
  type?: string;
  name: string;
  required?: boolean;
  email?: boolean;
  phone?: boolean;
  onDispatchInputState: (
    inputId: string,
    inputValue: string,
    inputValidity: boolean
  ) => void;
}

const FormInput: React.FC<FormInputProps> = ({
  label,
  isTextarea,
  type,
  name,
  required,
  email,
  phone,
  onDispatchInputState,
}) => {
  const [inputState, setInputState] = useState({
    inputValue: "",
    isInputValid: required ? false : true,
  });
  const [invalidMessage, setInvalidMessage] = useState("");
  const [isInputTouched, setIsInputTouched] = useState(false);

  useEffect(() => {
    onDispatchInputState(name, inputState.inputValue, inputState.isInputValid);
  }, [inputState]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = e.target;

    let isValid = true;
    let message = "";

    const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneRegEx = /^\+(?:[0-9]●?){6,14}[0-9]$/;

    if (email && !emailRegEx.test(value)) {
      isValid = false;
      message = "Incorrect email format";
    }
    if (phone && !phoneRegEx.test(value)) {
      isValid = false;
      message = "Please use format '+385 52 541111'";
    }

    if (phone && isNaN(Number(value.slice(1)))) {
      isValid = false;
      setInvalidMessage("Invalid input. Numbers only accepted");
      return;
    }

    if (phone && !value) {
      isValid = true;
    }

    if (required && !value) {
      isValid = false;
      message = "This field is required";
    }

    setInputState({
      inputValue: value,
      isInputValid: isValid,
    });
    setInvalidMessage(message);
  };

  return (
    <FormInputStyled isTextarea={isTextarea} inputValue={inputState.inputValue}>
      {isTextarea ? (
        <FormTextareaType
          inputValue={inputState.inputValue}
          name={name}
          required={required}
          onSetTouched={setIsInputTouched}
          onHandleInputChange={handleInputChange}
        />
      ) : (
        <FormInputType
          inputValue={inputState.inputValue}
          type={type!}
          name={name}
          required={required}
          onSetTouched={setIsInputTouched}
          onHandleInputChange={handleInputChange}
        />
      )}
      <label htmlFor={name}>
        {label}
        {required && "*"}
      </label>
      {isInputTouched && invalidMessage && (
        <p className="form-input_invalid-input">
          {invalidMessage || "Invalid input"}
        </p>
      )}
    </FormInputStyled>
  );
};

export default FormInput;

const FormInputStyled = styled.div<{
  inputValue: string;
  isTextarea?: boolean;
}>`
  flex: 1;
  margin: 0 0.5rem;
  position: relative;

  > label {
    position: absolute;
    top: ${(props) => (props.inputValue ? "-0.5rem" : "0.5rem")};
    font-size: ${(props) => (props.inputValue ? "0.75rem" : "1rem")};
    color: ${(props) => (props.inputValue ? "var(--darkGray)" : "var(--dark)")};
    transition: top 100ms ease-in;
  }

  .form-input_invalid-input {
    position: absolute;
    top: ${(props) => (props.isTextarea ? "102px" : "35px")};
    color: #ca0000;
    font-size: 0.75rem;
    line-height: 15px;
  }
`;
