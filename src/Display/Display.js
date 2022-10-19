export function Display(props) {
  let prev = props.prev;
  let operation = props.operation;
  let current = new Intl.NumberFormat({
    notation: "standard",
  }).format(props.current);
  return (
    <div className="display">
      <div>prev {prev}</div>
      <div>{operation}</div>
      <div>current-{isNaN(current) ? 0 : current}</div>
    </div>
  );
}
