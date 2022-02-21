import { styled } from "../../styles/styles.js";

const WhiteCardContainer = styled("div", {
  boxShadow: "0 2.4rem 4.8rem rgb(0 0 0 / 15%)",
  padding: "60px 40px",
  backgroundColor: "#fff",
  borderRadius: "15px",
  ">img": { width: "60px" },
});

const WhiteCardTitle = styled("h4", {
  fontSize: "21px",
  color: "#000000",
  fontWeight: "500 !important",
  margin: "10px 0px",
});

const WhiteCardSubtitle = styled("p", {
  fontSize: "19px",
  lineHeight: "1.4",
  color: "#525252",
});

const WhiteCard = (props) => {
  return (
    <WhiteCardContainer>
      <img src={`img/icons/${props.iconName}.svg`} alt="Booiq" />
      <WhiteCardTitle>{props.title}</WhiteCardTitle>
      <WhiteCardSubtitle>{props.text}</WhiteCardSubtitle>
    </WhiteCardContainer>
  );
};

export default WhiteCard;
