import { styled } from "../styles/styles.js";

const CheckListContainer = styled("div", {
  display: "grid",
  gridTemplateColumns: "1fr",
  rowGap: "16px",
  columnGap: "48px",
  "@sm": {
    gridTemplateColumns: "1fr 1fr",
  },
  "@md": {
    gridTemplateColumns: "1fr 1fr 1fr",
  },
});

const ListItems = styled("div", {
  display: "flex",
  alignItems: "center",
  textAlign: "left",
  fontSize: "19px",
  fontWeight: "400",
  color: "#fefefe",
  gap: "20px",
});

const CheckList = (props) => {
  return (
    <CheckListContainer>
      {props.items.map((item) => (
        <CheckListItem key={item}>{item}</CheckListItem>
      ))}
    </CheckListContainer>
  );
};

const CheckListItem = (props) => {
  return (
    <ListItems>
      <CheckMark />
      {props.children}
    </ListItems>
  );
};

const CheckMark = () => {
  return (
    <svg
      style={{ width: "32px" }}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
    >
      <g>
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="m5 12 5 5L20 7"
          stroke="#365dc7"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>
    </svg>
  );
};

export default CheckList;
