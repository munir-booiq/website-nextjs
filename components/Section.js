import { styled } from "../styles/styles.js";

const Section = styled("section", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  variants: {
    color: {
      black: {
        backgroundColor: "#141317",
      },
    },
  },
});
export default Section;
