import { styled } from "../../styles/styles.js";
// import "./Navbar.css";

const NavList = styled("ul", {
  display: "none",
  "@md": {
    listStyle: "none",
    display: "flex",
    alignItems: "center",
    gap: "48px",
    padding: "12px 24px",
    border: "solid 1px",
    borderRadius: "9px",
    borderColor: "#1c1c1c",
    color: "#1c1c1c",
    backgroundColor: "#fff",
    ">a": {
      textDecoration: "none",
      color: "#333",
      fontWeight: "500",
      fontSize: "18px",
      "&:hover": { color: "#fff" },
      "&:active": { color: "#fff" },
    },
  },
});

const Navbar = () => {
  return (
    <nav>
      <NavList>
        <a href="https://app.booiq.com">Logga in</a>
      </NavList>
    </nav>
  );
};

export default Navbar;
