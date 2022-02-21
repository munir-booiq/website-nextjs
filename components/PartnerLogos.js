import { styled } from "../styles/styles.js";
import Image from "next/image";

export const PartnerLogosContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: "48px",
  ">*": { width: "85%" },
  "@sm": {
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    maxWidth: "1280px",
    justifySelf: "center",
  },
});

const PartnerLogos = (props) => {
  return (
    <PartnerLogosContainer>
      {props.logoItems.map((item) => (
        <PartnerLink
          key={item.logoLink}
          logoLink={item.logoLink}
          logoImageName={item.logoImageName}
          logoAltText={item.logoAltText}
        />
      ))}
    </PartnerLogosContainer>
  );
};

const PartnerLink = (props) => {
  return (
    <a href={props.logoLink}>
      <img src={`img/logos/${props.logoImageName}`} alt={props.logoAltText} />
    </a>
  );
};

export default PartnerLogos;
