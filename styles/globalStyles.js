import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
  "*": {
    padding: "0",
    margin: "0",
    boxSizing: "border-box",
  },
  // "@font-face": {
  //   fontFamily: "Inter",
  //   src: 'url("./fonts/WOFF/Atkinson-Hyperlegible-Regular-102.woff")',
  // },
  body: {
    fontWeight: "400",
    color: "#555",
    backgroundColor: "#f6f6f6",
    fontFamily: "Inter",
  },
  img: {
    width: "100%",
    minHeight: "0",
    objectFit: "contain",
  },
  p: {
    fontFamily: "Atkinson, sans-serif",
  },
  div: {
    fontFamily: "Atkinson, sans-serif",
  },
  em: {
    color: "#356dc7",
    fontStyle: "normal",
  },
});
