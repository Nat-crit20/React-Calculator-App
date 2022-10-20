import { styles } from "../styles/Themes/Theme1/DisplayTheme1";

export function Display(props) {
  let prev = new Intl.NumberFormat(undefined, {
    maximumFractionDigits: 15,
  }).format(props.prev);
  let operation = props.operation;
  let current = new Intl.NumberFormat(undefined, {
    maximumFractionDigits: 15,
  }).format(props.current);
  return (
    <div style={styles}>
      <div>prev {prev}</div>
      <div>{operation}</div>
      <div>current-{current}</div>
    </div>
  );
}
