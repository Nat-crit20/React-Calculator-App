export function Button(props) {
  return (
    <button className={props.className} onClick={props.action}>
      {props.value}
    </button>
  );
}
