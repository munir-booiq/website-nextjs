import { styled } from "../styles/styles.js";

const HeroSection = styled("div", {
  backgroundImage: "url(img/patterns/welcome.svg)",
  backgroundSize: "contain",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "50px 50px",
  padding: "6rem 0",
  maxWidth: "1280px",
  justifySelf: "center",
});

const HeroHeading = styled("h1", {
  textAlign: "center",
  fontSize: "72px",
  color: "#141317",
  fontWeight: "800",
  lineHeight: "1.05",
  fontFamily: "Inter",
  "@md": {
    textAlign: "center",
    fontSize: "96px",
    color: "#141317",
    fontWeight: "800",
    lineHeight: "1.05",
    fontFamily: "Inter",
  },
});

const HeroDescription = styled("p", {
  fontSize: "26px",
  lineHeight: "1.6",
  textAlign: "center",
  marginTop: "60px",
  marginBottom: "60px",
});

const ImageContainer = styled("div", {
  display: "flex",
  flexDirection: "column",
  padding: "0 10vw",
  alignItems: "center",
  gap: "10px",
  ">img": {
    filter: "drop-shadow(0.35rem 0.35rem 0.4rem rgba(37, 27, 25, 0.2))",
  },
  "@sm": {
    display: "grid",
    gridTemplateColumns: "repeat(10, 10%)",
    gridTemplateRows: "repeat(10, 10%)",
    padding: "0 5vw",
    gap: "0px",
    ">img": {
      width: "100%",
      filter: "drop-shadow(0.35rem 0.35rem 0.4rem rgba(37, 27, 25, 0.2))",
    },
  },
  // "@lg": {
  //   width: "80%",
  // },
});

const HeroText = styled("div", {
  padding: "0 15vw",
});

const Hero = () => {
  return (
    <>
      <HeroText>
        <HeroHeading>
          Upptäck <em>städer</em> på ett nytt sätt
        </HeroHeading>
        <HeroDescription>
          Booiq - en operativ fastighetsplattform för kommersiell
          fastighetsförvaltning. Analysera Sveriges städer och företag på ett
          nytt sätt.
        </HeroDescription>
      </HeroText>
      <HeroImage />
    </>
  );
};

const HeroImage = () => {
  return (
    <ImageContainer>
      <img
        src="/img/ui/hero-browser.webp"
        alt="Booiq"
        style={{ gridRow: "1/-1", gridColumn: "2 / span 8" }}
      />
      <img
        src="/img/ui/uifliff-cluster.webp"
        alt="Booiq"
        style={{ gridRow: "3", gridColumn: "9/13" }}
      />
      <img
        src="/img/ui/premise-innovationsvagen.webp"
        alt="Booiq"
        style={{ gridRow: "3 / 6", gridColumn: "1/3" }}
      />
      <img
        src="/img/ui/estate-mini.webp"
        alt="Booiq"
        style={{ gridRow: "5", gridColumn: "9/-1" }}
      />
    </ImageContainer>
  );
};

export default Hero;
