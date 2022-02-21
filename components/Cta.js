import Card from "./UI/Card";
import { styled } from "../styles/styles.js";
import ContactForm from "./ContactForm";

const Cta = () => {
  return (
    <Card color="blue" textAlign="left">
      <BlueCardContainer>
        <BlueCardContent>
          <img src="/img/icons/message-circle.svg" alt="Booiq" />
          <h2>Nyfiken?</h2>
          <p>Hör av dig så berättar vi mer!</p>
        </BlueCardContent>
        <ContactForm />
      </BlueCardContainer>
    </Card>
  );
};

const BlueCardContainer = styled("div", {
  display: "grid",
  gridGap: "0px",
  gridTemplateColumns: "1fr",
  justifyContent: "center",
  textAlign: "center",
  "@lg": {
    gridTemplateColumns: "1fr 1fr",
    justifyContent: "left ",
    textAlign: "left",
  },
});

const BlueCardContent = styled("div", {
  color: "#f6f6f6",
  ">h2": {
    fontSize: "48px",
    color: "#f6f6f6",
    marginBottom: "10px",
  },
  ">p": {
    fontSize: "20px",
    color: "#f6f6f6",
  },
  ">img": {
    width: "64px",
  },
});

export default Cta;
