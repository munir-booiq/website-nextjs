import { styled } from "../styles/styles.js";

const Section = styled("section", {
  display: "flex",
  flexDirection: "column",
  padding: "0 10vw",
  "@medium": {
    margin: "0px 0px",
  },
});
export default Section;
