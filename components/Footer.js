import { styled } from "../styles/styles.js";

const FooterContainer = styled("div", {
  borderTop: "1px solid #eee",
  backgroundColor: "#141317",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "200px 40vw",
});

const Footer = () => {
  return (
    <FooterContainer>
      <img src="img/booiq-solid-white.svg" alt="Booiq" />
    </FooterContainer>
  );
};

export default Footer;
