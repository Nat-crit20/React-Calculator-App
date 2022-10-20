import { styles } from "../styles/Themes/Theme1/ButtonDisplayTheme1";
import { Button } from "../Button/Button";
export function ButtonDisplay(props) {
  return (
    <div style={styles} className="button-display">
      <Button action={props.change} value={7} />
      <Button action={props.change} value={8} />
      <Button action={props.change} value={9} />
      <Button action={props.delete} className="blue-highlight" value={"DEL"} />
      <Button action={props.change} value={6} />
      <Button action={props.change} value={7} />
      <Button action={props.change} value={8} />
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
        className="span-two blue-highlight"
      />
      <Button
        action={props.changeState}
        value={"="}
        className="span-two red-highlight"
      />
    </div>
  );
}
