import { styled } from "../../styles/styles.js";

const Card = styled("div", {
  // display: "grid",
  flex: "1",
  padding: "48px",
  borderRadius: "25px",
  justifyContent: "center",
  fontSize: "20px",
  color: "#d8d8d8",
  variants: {
    color: {
      blue: { backgroundColor: "#356dc7" },
      black: { backgroundColor: "#141317" },
    },
    textAlign: {
      center: { textAlign: "center" },
      left: { textAlign: "left" },
    },
  },
});

export default Card;
