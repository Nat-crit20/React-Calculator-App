import { styles } from "../styles/Themes/Theme1/ButtonTheme1";
import { styles2 } from "../styles/Themes/Theme2/ButtonTheme2";
import { styles3 } from "../styles/Themes/Theme3/ButtonTheme3";

const Themes = [styles, styles2, styles3];

export function Button(props) {
  let name = props.className;
  let color = props.color;
  if (!color) {
    color = "basic";
  }

  return (
    <button
      style={Themes[props.theme][color]}
      className={name}
      onClick={props.action}
    >
      {props.value}
    </button>
  );
}
