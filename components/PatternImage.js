import { styled } from "../styles/styles.js";
const PatternImage = styled("div", {
  opacity: ".1",
  position: "absolute",
  ">img": { zIndex: "0" },
  variants: {
    full: {
      true: {
        width: "100%",
        position: "relative",
        // top: "0",
        // zIndex: "-1",
      },
    },
  },
});

export default PatternImage;
