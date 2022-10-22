import { styles } from "../styles/Themes/Theme1/DisplayTheme1";
import { styles2 } from "../styles/Themes/Theme2/DisplayTheme2";
import { styles3 } from "../styles/Themes/Theme3/DisplayTheme3";

const Themes = [styles, styles2, styles3];
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
    <div>
      <div className="display-head">
        <p>calc</p>
        <div className="theme-choice">
          <p className="header">THEME</p>
          <div>
            <input
              type="radio"
              name="theme"
              value="0"
              onChange={props.change}
            />
            <p>1</p>
          </div>

          <div>
            <input
              type="radio"
              name="theme"
              value="1"
              onChange={props.change}
            />
            <p>2</p>
          </div>

          <div>
            <input
              type="radio"
              name="theme"
              value="2"
              onChange={props.change}
            />
            <p>3</p>
          </div>
        </div>
      </div>
      <div style={Themes[props.theme]} className="display">
        <div>
          {prev} {operation}
        </div>
        <div>{current}</div>
      </div>
    </div>
  );
}
