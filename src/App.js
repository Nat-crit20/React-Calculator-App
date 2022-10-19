import { useState } from "react";
import "./App.css";
import { ButtonDisplay } from "./ButtonDisplay/ButtonDisplay";
import { Display } from "./Display/Display";

function App() {
  const [total, setTotal] = useState("");
  const [prevValue, setPrevValue] = useState("");
  const [operation, setOperation] = useState("");

  const handleChange = (e) => {
    const value = e.target.innerText;
    setTotal((state) => {
      console.log(state);
      if (state.length === 1 && state === 0) {
        return state;
      }
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
      <Display operation={operation} current={total} prev={prevValue} />
      <ButtonDisplay
        change={handleChange}
        reset={handleReset}
        changeState={handlePrevState}
        delete={handleDelete}
      />
    </div>
  );
}

export default App;
