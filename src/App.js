import { useState } from "react";
import "./styles/App.css";
import { styles } from "./styles/Themes/Theme1/AppTheme1";
import { ButtonDisplay } from "./ButtonDisplay/ButtonDisplay";
import { Display } from "./Display/Display";

function App() {
  const [total, setTotal] = useState("");
  const [prevValue, setPrevValue] = useState("");
  const [operation, setOperation] = useState("");

  const handleChange = (e) => {
    const value = e.target.innerText;
    setTotal((state) => {
      if (state.length === 1 && state === 0) {
        return state;
      } else if (state.length === 13) {
        return state;
      } else {
        return state + value;
      }
    });
  };

  const handlePrevState = (e) => {
    let prevTotal = total;
    if (!prevValue) {
      if (e.target.innerText === "=") {
        return;
      }
      setPrevValue(prevTotal);
      setOperation(e.target.innerText);
      setTotal("");
    } else {
      calc(e);
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

  const calc = (e) => {
    let numTotal = Number(total);
    let numPrevValue = Number(prevValue);
    let finalTotal = mathOperation(operation, numPrevValue, numTotal);
    if (e.target.innerText === "=") {
      setPrevValue("");
      setOperation("");
      setTotal(finalTotal);
    } else {
      setPrevValue(finalTotal);
      setOperation(e.target.innerText);
      setTotal("");
    }
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
    <div style={styles} className="App">
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
