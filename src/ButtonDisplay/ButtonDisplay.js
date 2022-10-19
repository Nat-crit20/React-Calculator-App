export function ButtonDisplay(props) {
  return (
    <div className="button-display">
      <button onClick={props.change}>7</button>
      <button onClick={props.change}>8</button>
      <button onClick={props.change}>9</button>
      <button onClick={props.delete} className="blue-highlight">
        DEL
      </button>
      <button onClick={props.change}>4</button>
      <button onClick={props.change}>5</button>
      <button onClick={props.change}> 6</button>
      <button onClick={props.changeState}>+</button>
      <button onClick={props.change}>1</button>
      <button onClick={props.change}>2</button>
      <button onClick={props.change}>3</button>
      <button onClick={props.changeState}>-</button>
      <button onClick={props.change}>.</button>
      <button onClick={props.change}>0</button>
      <button onClick={props.changeState}>/</button>
      <button onClick={props.changeState}>*</button>
      <button onClick={props.delete} className="span-two blue-highlight">
        RESET
      </button>
      <button onClick={props.changeState} className="span-two red-highlight">
        =
      </button>
    </div>
  );
}
