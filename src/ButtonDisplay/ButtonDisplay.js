import { styles } from "../styles/Themes/Theme1/ButtonDisplayTheme1";
import { styles2 } from "../styles/Themes/Theme2/ButtonDisplayTheme2";
import { styles3 } from "../styles/Themes/Theme3/ButtonDisplayTheme3";
import { Button } from "../Button/Button";

const Themes = [styles, styles2, styles3];
export function ButtonDisplay(props) {
  return (
    <div style={Themes[props.theme]} className="button-display">
      <Button theme={props.theme} action={props.change} value={7} />
      <Button theme={props.theme} action={props.change} value={8} />
      <Button theme={props.theme} action={props.change} value={9} />
      <Button
        theme={props.theme}
        action={props.delete}
        color="blue"
        value={"DEL"}
      />
      <Button theme={props.theme} action={props.change} value={4} />
      <Button theme={props.theme} action={props.change} value={5} />
      <Button theme={props.theme} action={props.change} value={6} />
      <Button theme={props.theme} action={props.changeState} value={"+"} />
      <Button theme={props.theme} action={props.change} value={1} />
      <Button theme={props.theme} action={props.change} value={2} />
      <Button theme={props.theme} action={props.change} value={3} />
      <Button theme={props.theme} action={props.changeState} value={"-"} />
      <Button theme={props.theme} action={props.change} value={"."} />
      <Button theme={props.theme} action={props.change} value={0} />
      <Button theme={props.theme} action={props.changeState} value={"/"} />
      <Button theme={props.theme} action={props.changeState} value={"*"} />
      <Button
        theme={props.theme}
        action={props.reset}
        value={"RESET"}
        className="span-two"
        color="blue"
      />
      <Button
        theme={props.theme}
        action={props.changeState}
        value={"="}
        className="span-two"
        color="red"
      />
    </div>
  );
}
