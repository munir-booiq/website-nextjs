import "./BrailePattern.css";
function BrailePattern(props) {
  return (
    <img
      className={props.size === "full" ? "braile-full" : "braile-pattern"}
      src={`./img/patterns/${props.name}.svg`}
      alt="Booiq"
    />
  );
}

export default BrailePattern;
