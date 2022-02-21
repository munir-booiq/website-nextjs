import { styled } from "../styles/styles.js";
import Details from "./UI/Details";

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

const FlippableSection = styled("div", {
  display: "flex",
  flexDirection: "column",
  marginBottom: "50px",
  gap: "60px",
  ">*": {
    flex: 1,
  },
  variants: {
    flipped: {
      true: {
        "@sm": {
          flexDirection: "row-reverse",
          justifyContent: "center",
        },
      },
    },
  },
  "@sm": {
    flexDirection: "row",
  },
});

const LayeredImages = styled("div", {
  display: "grid",
  gridTemplateRows: "repeat(10, 10%)",
  gridTemplateColumns: "repeat(10, 10%)",
  ">img": { width: "100%", objectFit: "contain" },
});

const TextContent = styled("div", {});

const HowSection = () => {
  return (
    <>
      <FlippableSection flipped={true}>
        <LayeredImages>
          <img
            src={`img/photos/b-nystandard.webp`}
            alt=""
            style={{ gridRow: "1/-1", gridColumn: "1/-2" }}
          />
          <img
            src={`img/ui/uifliff-upplevese-gamlastan.svg`}
            alt=""
            style={{ gridRow: "5/6", gridColumn: "5/11" }}
          />
        </LayeredImages>
        <TextContent>
          <Caption>kraftfullt och effektivt</Caption>
          <Title>En ny standard</Title>
          <Details title="Analysera CBD">
            Skapa en interaktiv och visuell analys i realtid med kraftfulla
            filter och lager. Hitta intressanta branschkluster och analysera
            stadskärnor.
          </Details>
          <Details title="Ranking på riktigt">
            Traditionella ABC-lägen är ett minne blott, vi har en ny standard.
            Du slipper samma-för-alla-principen, datadrivet är inte godtyckligt.
          </Details>
          <Details title="Enkelt som 1-2-3">
            En enkel och användarvänlig plattform skapad för
            fastighetsbranschen.
          </Details>
        </TextContent>
      </FlippableSection>

      <FlippableSection>
        <LayeredImages>
          <img
            src={`img/photos/q-digitalisering.webp`}
            alt=""
            style={{ gridRow: "1/-1", gridColumn: "2/-1" }}
          />
          <img
            src={`img/ui/area-gamlastan.webp`}
            alt=""
            style={{ gridRow: "6/10", gridColumn: "1/5" }}
          />
        </LayeredImages>
        <TextContent>
          <Caption>kraftfullt och effektivt</Caption>
          <Title>En ny standard</Title>
          <Details title="Analysera CBD">
            Skapa en interaktiv och visuell analys i realtid med kraftfulla
            filter och lager. Hitta intressanta branschkluster och analysera
            stadskärnor.
          </Details>
          <Details title="Ranking på riktigt">
            Traditionella ABC-lägen är ett minne blott, vi har en ny standard.
            Du slipper samma-för-alla-principen, datadrivet är inte godtyckligt.
          </Details>
          <Details title="Enkelt som 1-2-3">
            En enkel och användarvänlig plattform skapad för
            fastighetsbranschen.
          </Details>
        </TextContent>
      </FlippableSection>
    </>
  );
};

export default HowSection;
