import Card from "./UI/Card";
import CheckList from "./CheckList";
import PatternImage from "./PatternImage";
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

const Tillsammans = () => {
  return (
    <Card color="black" textAlign="center">
      <PatternImage>
        <img src="/img/patterns/p-ti.svg" alt="Booiq" />
      </PatternImage>
      <Caption style={{ color: "#6b6b6b" }}>tillsammans uppnår vi</Caption>
      <Title style={{ color: "#f6f6f6" }}>
        Högre driftnetto, ökat fastighetsvärde.
      </Title>
      <CheckList
        items={[
          "Snabbare uthyrning",
          "Mindre lokalanpassningar",
          "Lägre vakansgrad",
          "Enklare rockader",
          "Högre marknadshyror",
          "Färre uppsägningar",
        ]}
      />
    </Card>
  );
};
export default Tillsammans;
