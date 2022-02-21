import PatternImage from "./PatternImage";
import Card from "./UI/Card";
import { styled } from "../styles/styles.js";

const Caption = styled("h4", {
  fontSize: "20px",
  lineHeight: "1.2",
  marginBottom: "20px",
  color: "#141317",
  fontWeight: "600",
  textTransform: "uppercase",
});

const Title = styled("h3", {
  fontSize: "48px",
  lineHeight: "1.2",
  marginBottom: "32px",
  color: "#141317",
  fontWeight: "600",
});

const Skala = () => {
  return (
    <Card color="blue" textAlign="center">
      <PatternImage>
        <img src="/img/patterns/p-nt.svg" alt="Booiq" />
      </PatternImage>
      <Caption style={{ color: "white" }}>flexibel prissättning</Caption>
      <Title style={{ color: "#f6f6f6" }}>Skala upp verksamheten</Title>
      Vår värdeskapande prismodell sätter dig som kund i fokus och gör det
      smidigt att anpassa verksamheten utifrån de förutsättningar och behov du
      har av tjänsten.
    </Card>
  );
};

export default Skala;
