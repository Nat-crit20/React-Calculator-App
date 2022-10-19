import { useState } from "react";
import "./App.css";

function App() {
  const [total, setTotal] = useState("");
  const [prevValue, setPrevValue] = useState("");
  const [operation, setOperation] = useState("");

  const handleChange = (e) => {
    const value = e.target.innerText;
    setTotal((state) => {
      return state + value;
    });
  };

  const handlePrevState = (e) => {
    let prevState = total;
    if (!prevValue) {
      setOperation(e.target.innerText);
      setPrevValue(prevState);
      setTotal("");
    } else {
      calc();
    }
  };
  const handleReset = () => {
    setOperation("");
    setPrevValue("");
    setTotal("");
  };
  const handleDelete = () => {
    setTotal("");
  };
  const calc = () => {
    let numTotal = Number(total);
    let numPrevValue = Number(prevValue);
    setPrevValue();
    let finalTotal = mathOperation(operation, numPrevValue, numTotal);
    setOperation("");
    setTotal(finalTotal);
  };

  const mathOperation = (operand, x, y) => {
    switch (operand) {
      case "+":
        return x + y;
      case "-":
        return x - y;
      case "/":
        return x / y;
      case "*":
        return x * y;
      case "=":
        calc();
        break;
      default:
        return;
    }
  };
  return (
    <div className="App">
      <div className="display">
        <div>prev {prevValue}</div>
        <div>{operation}</div>
        <div>current-{total}</div>
      </div>
      <div className="button-display">
        <button onClick={handleChange}>7</button>
        <button onClick={handleChange}>8</button>
        <button onClick={handleChange}>9</button>
        <button onClick={handleDelete} className="blue-highlight">
          DEL
        </button>
        <button onClick={handleChange}>4</button>
        <button onClick={handleChange}>5</button>
        <button onClick={handleChange}> 6</button>
        <button onClick={handlePrevState}>+</button>
        <button onClick={handleChange}>1</button>
        <button onClick={handleChange}>2</button>
        <button onClick={handleChange}>3</button>
        <button onClick={handlePrevState}>-</button>
        <button onClick={handleChange}>.</button>
        <button onClick={handleChange}>0</button>
        <button onClick={handlePrevState}>/</button>
        <button onClick={handlePrevState}>*</button>
        <button onClick={handleReset} className="span-two blue-highlight">
          RESET
        </button>
        <button onClick={handlePrevState} className="span-two red-highlight">
          =
        </button>
      </div>
    </div>
  );
}

export default App;
