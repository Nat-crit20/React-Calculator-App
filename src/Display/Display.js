export function Display(props) {
  let prev = props.prev;
  let operation = props.operation;
  let current = new Intl.NumberFormat(undefined, {
    maximumFractionDigits: 15,
  }).format(props.current);
  return (
    <div className="display">
      <div>prev {prev}</div>
      <div>{operation}</div>
      <div>current-{current}</div>
    </div>
  );
}
