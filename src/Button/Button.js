import { styles } from "../styles/Themes/Theme1/ButtonTheme1";

export function Button(props) {
  let name = props.className;
  let color = props.color;
  if (!color) {
    color = "basic";
  }
  return (
    <button style={styles[color]} className={name} onClick={props.action}>
      {props.value}
    </button>
  );
}
