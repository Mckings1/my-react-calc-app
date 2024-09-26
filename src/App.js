import "./App.css";
import { useState, useRef } from "react";
import Switch from "./switch";
import { ThemeProvider, useTheme } from "./ThemeContext";

function App() {
  const { theme } = useTheme();
  const inputRef = useRef(null);
  const [result, setResult] = useState(0);
  const [currentInput, setCurrentInput] = useState("");

  // Handle input for buttons
  const handleInput = (value) => {
    setCurrentInput((prev) => prev + value);
  };

  // Calculate the result based on the input expression
  const calculate = () => {
    try {
      // Evaluate the input expression (e.g., "2+3*4")
      // eslint-disable-next-line
      const calcResult = eval(currentInput); // Evaluates the input as JS expression
      setResult(calcResult);
      setCurrentInput(""); // Reset input after calculation
    } catch (error) {
      setResult("Error");
    }
  };

  const plus = (e) => {
    e.preventDefault();
    setCurrentInput((prev) => prev + "+");
  };

  const minus = (e) => {
    e.preventDefault();
    setCurrentInput((prev) => prev + "-");
  };

  const times = (e) => {
    e.preventDefault();
    setCurrentInput((prev) => prev + "*");
  };

  const divide = (e) => {
    e.preventDefault();
    setCurrentInput((prev) => prev + "/");
  };

  const resetInput = () => {
    setCurrentInput("");
    inputRef.current.value = "";
  };

  const resetResult = () => {
    setResult(0);
    resetInput();
  };

  return (
    <div className={`App ${theme}`}>
      <div>
        <Switch />
        <h2 className="calc">Calculator</h2>
      </div>
      <form>
        <div className="display">
          <p className="currentInput" ref={inputRef}>
            {currentInput}
          </p>

          {/* Result below*/}
          <p className="result">{result}</p>
        </div>
        <div className="buttons">
          <button type="button" onClick={() => handleInput("9")}>
            9
          </button>
          <button type="button" onClick={() => handleInput("8")}>
            8
          </button>
          <button type="button" onClick={() => handleInput("7")}>
            7
          </button>
          <button type="button" onClick={plus}>
            +
          </button>

          <button type="button" onClick={() => handleInput("6")}>
            6
          </button>
          <button type="button" onClick={() => handleInput("5")}>
            5
          </button>
          <button type="button" onClick={() => handleInput("4")}>
            4
          </button>
          <button type="button" onClick={minus}>
            -
          </button>

          <button type="button" onClick={() => handleInput("3")}>
            3
          </button>
          <button type="button" onClick={() => handleInput("2")}>
            2
          </button>
          <button type="button" onClick={() => handleInput("1")}>
            1
          </button>
          <button type="button" onClick={times}>
            *
          </button>

          <button type="button" onClick={resetInput}>
            C
          </button>
          <button type="button" onClick={() => handleInput("0")}>
            0
          </button>
          <button type="button" onClick={divide}>
            /
          </button>

          <button type="button" onClick={resetResult}>
            AC
          </button>
          <button type="button" onClick={calculate}>
            =
          </button>
        </div>
      </form>
    </div>
  );
}

function Root() {
  return (
    <ThemeProvider>
      <App />
    </ThemeProvider>
  );
}

export default Root;
