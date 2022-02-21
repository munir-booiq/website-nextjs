import { styled } from "../styles/styles.js";
import { useState, useEffect } from "react";

const ContactFormContainer = styled("div", {
  width: "100%",
  background: "lightcoral",
  boxShadow: "0 2.4rem 4.8rem rgba(0, 0, 0, 0.15)",
  borderRadius: "15px",
  backgroundColor: "#fff",
  overflow: "hidden",
});

const ContactFormElementsContainer = styled("div", {
  padding: "48px",
  color: "#fff",
});

const ContactFormTitle = styled("h2", {
  textAlign: "left",
  marginBottom: "10px",
  color: "rgb(20,19,23)",
  fontSize: "44px",
});

const Form = styled("form", {
  display: "grid",
  gridTemplateRows: "1fr 1fr",
  columnGap: "32px",
  rowGap: "24px",
  color: "#1c1c1c",
});

const Button = styled("button", {
  minHeight: "64px",
  fontSize: "20px",
  fontWeight: "600",
  borderRadius: "12px",
  backgroundColor: "#141317",
  color: "#fdf2e9",
  border: "none",
  cursor: "pointer",
  transition: "all 0.3s",
  variants: {
    color: {
      black: {
        backgroundColor: "#141317",
        "&:hover": {
          backgroundColor: "#424242",
          color: "#fff",
        },
      },
      submitted: {
        backgroundColor: "#36894e",
      },
    },
  },
});

const Input = styled("input", {
  outline: "none",
  border: "none",
  width: "100%",
  minHeight: "64px",
  padding: "18px 10px",
  fontSize: "18px",
  backgroundColor: "#f6f6f6",
  borderRadius: "12px",
  boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)",
  "&:focus": {
    outline: "none",
    border: "none",
    borderRadius: "9px",
    boxShadow: "0 0 0 1pt #c4c4c4",
  },
  "&::placeholder": {
    color: "#aaa",
  },
});

const submitButtonTexts = {
  notSubmitted: "Kontaka mig",
  pending: "Skickar ...",
  submitted: "Vi hör av oss",
};
const submitButtonColors = {
  notSubmitted: "black",
  pending: "black",
  submitted: "submitted",
};

function ContactForm() {
  const [formStatus, submitHandler, resetFormStatus] =
    useContactForm("/api/contact-form");

  return (
    <ContactFormContainer>
      <ContactFormElementsContainer>
        <ContactFormTitle>Fyll i uppgifter</ContactFormTitle>
        <Form
          id="contact"
          encType="application/x-www-form-urlencoded"
          name="sign-up"
          onSubmit={submitHandler}
        >
          <Input
            id="name"
            type="text"
            onChange={resetFormStatus}
            placeholder="Skriv ditt namn"
            name="name"
            required
          />
          <Input
            id="email"
            type="email"
            onChange={resetFormStatus}
            placeholder="Skriv din e-post / telefonnummer"
            name="email"
            required
          />
          <Button
            type="submit"
            id="kontakta"
            color={submitButtonColors[formStatus]}
          >
            {submitButtonTexts[formStatus]}
          </Button>

          {/* <Button>Clicked</Button> */}
        </Form>
      </ContactFormElementsContainer>
    </ContactFormContainer>
  );
}

function useContactForm(url) {
  const [formStatus, setFormStatus] = useState("notSubmitted");
  const [formData, setFormData] = useState();

  console.log("useContactForm", { formData, formStatus });
  useEffect(() => {
    console.log("useEffect callback called", { formData, formStatus });
    async function runEffect() {
      console.log("running side effect");

      await postForm(url, formData);
      setFormStatus("submitted");
    }
    if (formData && formStatus === "pending") runEffect();
  }, [url, formData, formStatus]);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    if (formStatus === "notSubmitted") {
      setFormStatus("pending");
      setFormData(data);
    }
  };

  const resetFormStatus = () => {
    setFormStatus("notSubmitted");
  };

  return [formStatus, formSubmitHandler, resetFormStatus, formData];
}

async function postForm(url, data) {
  return fetch(url, {
    method: "post",
    body: JSON.stringify(data),
    headers: {
      "content-type": "application/json",
    },
  })
    .then((response) => response.json())
    .catch(() => {});
}

export default ContactForm;
