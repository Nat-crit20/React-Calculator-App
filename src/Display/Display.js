export function Display(props) {
  return (
    <div className="display">
      <div>prev {props.prev}</div>
      <div>{props.operation}</div>
      <div>current-{props.current}</div>
    </div>
  );
}
