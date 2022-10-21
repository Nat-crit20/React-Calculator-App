import { styles } from "../styles/Themes/Theme1/DisplayTheme1";
import { styles2 } from "../styles/Themes/Theme2/DisplayTheme2";
import { styles3 } from "../styles/Themes/Theme3/DisplayTheme3";

export function Display(props) {
  let prev = new Intl.NumberFormat(undefined, {
    maximumFractionDigits: 15,
  }).format(props.prev);
  let operation = props.operation;
  let current = new Intl.NumberFormat(undefined, {
    maximumFractionDigits: 15,
    maximumSignificantDigits: 15,
  }).format(props.current);
  if (prev === "0") {
    prev = "";
  }
  return (
    <div style={styles3} className="display">
      <div>
        {prev} {operation}
      </div>
      <div>{current}</div>
    </div>
  );
}
