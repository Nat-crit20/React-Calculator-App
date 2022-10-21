import { styles } from "../styles/Themes/Theme1/ButtonDisplayTheme1";
import { styles2 } from "../styles/Themes/Theme2/ButtonDisplayTheme2";
import { styles3 } from "../styles/Themes/Theme3/ButtonDisplayTheme3";

import { Button } from "../Button/Button";
export function ButtonDisplay(props) {
  return (
    <div style={styles3} className="button-display">
      <Button action={props.change} value={7} />
      <Button action={props.change} value={8} />
      <Button action={props.change} value={9} />
      <Button action={props.delete} color="blue" value={"DEL"} />
      <Button action={props.change} value={4} />
      <Button action={props.change} value={5} />
      <Button action={props.change} value={6} />
      <Button action={props.changeState} value={"+"} />
      <Button action={props.change} value={1} />
      <Button action={props.change} value={2} />
      <Button action={props.change} value={3} />
      <Button action={props.changeState} value={"-"} />
      <Button action={props.change} value={"."} />
      <Button action={props.change} value={0} />
      <Button action={props.changeState} value={"/"} />
      <Button action={props.changeState} value={"*"} />
      <Button
        action={props.reset}
        value={"RESET"}
        className="span-two"
        color="blue"
      />
      <Button
        action={props.changeState}
        value={"="}
        className="span-two"
        color="red"
      />
    </div>
  );
}
