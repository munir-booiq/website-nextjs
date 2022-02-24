import { styled } from "../../styles/styles.js";
export const Pattern = styled("div", {
  width: "100%",
  variants: {
    color: {
      onBlack: {
        fill: "gray",
      },
      onWhite: {
        fill: "white",
      },
      onBlue: {
        fill: "white",
      },
    },
  },
});
