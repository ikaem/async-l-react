import React, { useReducer, useState } from "react";
import styled from "styled-components";

import FormInput from "./form-input.component";

interface FormStateInterface {
  inputValues: {
    name: string;
    email: string;
    messageTitle: string;
    message: string;
    phone: string;
    company: string;
  };
  inputValidities: {
    name: boolean;
    email: boolean;
    messageTitle: boolean;
    message: boolean;
    phone: boolean;
    company: boolean;
  };
  isFormValid: boolean;
}

interface SetInputValueActionInterface {
  type: typeof SET_INPUT_STATE;
  payload: {
    inputId: string;
    inputValue: string;
    inputValidity: boolean;
  };
}

type formReducerActionTypes = SetInputValueActionInterface;

const SET_INPUT_STATE = "SET_INPUT_STATE";

const setInputState = (
  inputId: string,
  inputValue: string,
  inputValidity: boolean
): SetInputValueActionInterface => {
  return {
    type: SET_INPUT_STATE,
    payload: {
      inputId,
      inputValue,
      inputValidity,
    },
  };
};

const initialFormState: FormStateInterface = {
  inputValues: {
    name: "",
    email: "",
    messageTitle: "",
    message: "",
    phone: "",
    company: "",
  },
  inputValidities: {
    name: false,
    email: false,
    messageTitle: false,
    message: false,
    phone: true,
    company: true,
  },
  isFormValid: false,
};

const formReducer = (
  state: FormStateInterface,
  action: formReducerActionTypes
) => {
  switch (action.type) {
    case SET_INPUT_STATE:
      const { inputId, inputValue, inputValidity } = action.payload;

      const setInputValues = {
        ...state.inputValues,
        [inputId]: inputValue,
      };
      const setInputValidities = {
        ...state.inputValidities,
        [inputId]: inputValidity,
      };
      const setIsFormValid = !Object.values(setInputValidities).some(
        (validity) => validity === false
      );

      const setState: FormStateInterface = {
        inputValues: setInputValues,
        inputValidities: setInputValidities,
        isFormValid: setIsFormValid,
      };

      return setState;
    default:
      return state;
  }
};

const ContactForm: React.FC = () => {
  const [formState, dispatchFormState] = useReducer(
    formReducer,
    initialFormState
  );

  const [formSubmissionState, setFormSubmissionState] = useState<{
    isSubmitting: boolean;
    submissionEnded?: {
      isSuccess: boolean;
      message: string;
    };
  }>({
    isSubmitting: false,
  });

  const dispatchInputState = (
    inputId: string,
    inputValue: string,
    inputValidity: boolean
  ) => {
    dispatchFormState(setInputState(inputId, inputValue, inputValidity));
  };

  const onSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    if (!formState.isFormValid) return;
    e.preventDefault();

    setFormSubmissionState((prev) => ({
      ...prev,
      isSubmitting: true,
    }));

    try {
      await new Promise((resolve, reject) =>
        setTimeout(() => {
          const rand = Math.random();
          console.log("random", rand);

          if (rand < 0.5) reject("Submission fail");
          if (rand >= 0.5) resolve("Submission success");
        }, 1000)
      );
      setFormSubmissionState({
        submissionEnded: {
          isSuccess: true,
          message: "Thank you. Your message was sent successfully.",
        },
        isSubmitting: false,
      });
    } catch (error) {
      console.log(error);
      setFormSubmissionState({
        submissionEnded: {
          isSuccess: false,
          message:
            "Unfortunately, there was an issue sending your message. Please try again, or contact us via email.",
        },
        isSubmitting: false,
      });
    }
  };

  return (
    <ContactFormStyled>
      <form
        onSubmit={onSubmitForm}
        className="form-wrapper_contact-form"
      >
        <fieldset className="contact-form_form-fieldset">
          <FormInput
            label="Your name"
            type="text"
            name="name"
            required
            onDispatchInputState={dispatchInputState}
          />
          <FormInput
            label="Email address"
            type="email"
            name="email"
            required
            email
            onDispatchInputState={dispatchInputState}
          />
        </fieldset>
        <fieldset className="contact-form_form-fieldset">
          <FormInput
            label="Phone number"
            type="tel"
            name="phone"
            phone
            onDispatchInputState={dispatchInputState}
          />
          <FormInput
            label="Company"
            type="text"
            name="company"
            onDispatchInputState={dispatchInputState}
          />
        </fieldset>
        <fieldset className="contact-form_form-fieldset">
          <FormInput
            label="Message title"
            type="text"
            name="messageTitle"
            required
            onDispatchInputState={dispatchInputState}
          />
        </fieldset>
        <fieldset className="contact-form_form-fieldset">
          <FormInput
            label="Message"
            isTextarea
            name="message"
            required
            onDispatchInputState={dispatchInputState}
          />
        </fieldset>
        <button
          className="contact-form_button-submit"
          type="submit"
          disabled={!formState.isFormValid || formSubmissionState.isSubmitting}
        >
          Submit
        </button>
      </form>
      {formSubmissionState.submissionEnded && (
        <div
          className={`form_wrapper_submission-feedback ${
            formSubmissionState.submissionEnded?.isSuccess
              ? "submission-success"
              : "submission-fail"
          }`}
        >
          <span>{formSubmissionState.submissionEnded?.message}</span>
        </div>
      )}
    </ContactFormStyled>
  );
};

export default ContactForm;

const ContactFormStyled = styled.div`
  padding: 2rem 1rem 4rem;
  margin-bottom: 3rem;
  background-color: var(--ligthGray);
  position: relative;

  .form-wrapper_contact-form {
    display: flex;
    flex-direction: column;
  }

  .contact-form_form-fieldset {
    display: flex;
    justify-content: space-between;
    position: relative;
    margin-bottom: 3rem;
  }

  .contact-form_button-submit {
    margin: 1.75rem 0.5rem 0.25rem;
    font-size: 1.125rem;
    padding: 1.25rem 5rem;
    color: white;
    background-color: var(--dark);
    cursor: pointer;

    :disabled {
      cursor: not-allowed;
      background-color: var(--darkGray);
    }
  }

  .form_wrapper_submission-feedback {
    display: none;
    margin: 1.75rem 0.5rem 0.25rem;
    font-size: 1rem;
    line-height: 24px;
    padding: 1.25rem 1rem;
    color: white;
    text-align: center;
  }

  .submission-success {
    display: block;
    background-color: cadetblue;
  }

  .submission-fail {
    display: block;
    background-color: tomato;
  }

  /* tablet */
  @media (min-width: 780px) {
    .contact-form_button-submit {
      align-self: center;
    }
  }

  /* desktop */
  @media (min-width: 1080px) {
    padding: 4.75rem 6.125rem;
    margin-bottom: 7.5rem;
  }
`;
