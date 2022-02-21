import { styled } from "../../styles/styles.js";
import Navbar from "./Navbar";

const Navigation = styled("header", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#fff",
  height: "96px",
  padding: "0 48px",
  position: "sticky",
  boxShadow: "0 12px 32px rgba(0, 0, 0, 0.03)",
  top: "0",
  zIndex: "9999",
  ">a>img": { width: "130px" },
  "@medium": { padding: "0 32px" },
});

const Header = () => {
  return (
    <Navigation>
      <a href="https://booiq.com">
        <img alt="Booiq" src="../../img/booiq-solid-black.svg" />
      </a>
      <Navbar />
    </Navigation>
  );
};

export default Header;
