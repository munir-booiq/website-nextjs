import PartnerLogos from "./PartnerLogos";
import { styled } from "../styles/styles.js";

const PartnersSection = styled("div", {
  textAlign: "center",
});
const Caption = styled("h4", {
  fontSize: "20px",
  lineHeight: "1.2",
  marginBottom: "20px",
  color: "#141317",
  fontWeight: "600",
  textTransform: "uppercase",
});

const Partners = () => {
  const logoItems = [
    {
      logoLink: "https://homepal.se/",
      logoImageName: "homepal-vert.svg",
      logoAltText: "Homepal Booiq partner",
    },
    {
      logoLink: "https://www.parakey.co/",
      logoImageName: "parakey.svg",
      logoAltText: "Parakey Booiq partner",
    },
    {
      logoLink: "https://implity.se/",
      logoImageName: "implity-rgb.svg",
      logoAltText: "Implity Booiq partner",
    },
    {
      logoLink: "https://www.smwg.se/",
      logoImageName: "smwg.png",
      logoAltText: "Social Media Work Group Booiq partner",
    },

    {
      logoLink: "https://agvnordics.se/",
      logoImageName: "agv-logo-black.png",
      logoAltText: "AVGNordic",
    },
    {
      logoLink: "https://www.propstreet.com/",
      logoImageName: "propstreet.webp",
      logoAltText: "Propstreet Booiq partner",
    },
    {
      logoLink: "https://www.proptechsweden.org/",
      logoImageName: "proptech-logo.png",
      logoAltText: "Proptech Booiq partner",
    },
    {
      logoLink: "https://www.nrgize.se/",
      logoImageName: "nrgize-logotype.png",
      logoAltText: "Nrgize Booiq partner",
    },
  ];
  return (
    <PartnersSection>
      <div className="container">
        <Caption>Partners</Caption>
        <PartnerLogos logoItems={logoItems} />
      </div>
    </PartnersSection>
  );
};
export default Partners;
