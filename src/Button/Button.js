export function Button(props) {
  return <button onClick={props.action}>{props.value}</button>;
}
