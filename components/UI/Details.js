// import "./details.css";
import { styled } from "../../styles/styles.js";

const Title = styled("h4", {
  fontSize: "20px",
  lineHeight: "1.2",
  color: "#141317",
  marginTop: "20px",
  marginBottom: "5px",
  fontWeight: "600",
});

const Text = styled("p", {
  fontSize: "19px",
});

const Details = (props) => {
  return (
    <div>
      <Title>{props.title}</Title>
      <Text>{props.children}</Text>
    </div>
  );
};
export default Details;
