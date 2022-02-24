import { styled } from "../styles/styles.js";
import WhiteCard from "./UI/WhiteCard";
import { Intuitivt } from "./patterns/Intuitivt";

const WhiteCardsSection = styled("div", {
  display: "grid",
  gridTemplateRows: "1fr",
  gridTemplateColumns: "1fr",
  gap: "40px",
  "@md": { gridTemplateColumns: "1fr 1fr 1fr", maxWidth: "1280px" },
});

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

const Effektivisera = () => {
  return (
    <>
      <Caption style={{ color: "#6b6b6b" }}>INTUITIVT.ANPASSAT.ENKELT</Caption>
      <Title style={{ color: "#f6f6f6" }}>
        <em>Effektivisera</em> din kommersiella forvaltning.
      </Title>

      <WhiteCardsSection>
        <WhiteCard
          iconName="clipboard-check"
          title="Bättre beslutsunderlag"
          text="Få bättre underlag med booiq inför dina stora beslut, allting datadrivet i realtid och baserat på fakta."
        />
        <WhiteCard
          iconName="user"
          title="Anpassat för dig"
          text="Kraftfull och innovativ plattform där du som användare är i fokus, en tjänst utvecklat och designat för dina behov."
        />
        <WhiteCard
          iconName="report"
          title="Mindre administration"
          text="All relevant data för att göra din arbetsdag smidigare. Effektivare arbetsprocesser som helt enkelt fungerar."
        />
      </WhiteCardsSection>
    </>
  );
};

export default Effektivisera;
