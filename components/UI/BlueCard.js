import { styled } from "../../styles.js";
import { ContactForm } from "./ContactForm";

const BlueCardContainer = styled("div", {
  display: "grid",
  gridGap: "20px",
  gridTemplateColumns: "1fr 1fr",
  backgroundColor: "#356dc7",
  boxShadow: "0 2.4rem 4.8rem rgba(0, 0, 0, 0.15)",
  borderRadius: "25px",
  padding: "40px 48px",

  // position: "relative",
  // bottom: "-150px",
});

const BlueCardContent = styled("div", {
  width: "50%",
  textAlign: "left",
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

export const BlueCard = (props) => {
  return (
    <BlueCardContainer>
      <BlueCardContent>
        <img src={props.iconUrl} alt="Booiq" />
        <h2>{props.title}</h2>
        <p>{props.textContent}</p>
      </BlueCardContent>
      <ContactForm />
    </BlueCardContainer>
  );
};
