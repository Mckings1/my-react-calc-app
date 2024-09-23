import { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const [result, setResult] = useState(0);
  const [currentInput, setCurrentInput] = useState("");

  const handleInput = (value) => {
    setCurrentInput((prev) => prev + value);
  };

  const plus = (e) => {
    e.preventDefault();
    setResult((prev) => prev + Number(currentInput));
    resetInput();
  };

  const minus = (e) => {
    e.preventDefault();
    setResult((prev) => prev - Number(currentInput));
    resetInput();
  };

  const times = (e) => {
    e.preventDefault();
    setResult((prev) => prev * Number(currentInput));
    resetInput();
  };

  const divide = (e) => {
    e.preventDefault();
    const value = Number(currentInput);
    setResult((prev) => (value !== 0 ? prev / value : "Error: Div by 0"));
    resetInput();
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
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <div className="display">
          <p>{result}</p>
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a number"
            value={currentInput}
            readOnly
          />
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
          {/* <button type="button" onClick={calculate}>
            =
          </button> */}
        </div>
      </form>
    </div>
  );
}

export default App;

//   const handleInput = (value) => {
//     setCurrentInput((prev) => prev + value);
//   };

//   function plus(e) {
//     e.preventDefault();
//     setResult((result) => result + Number(inputRef.current.value));
//   }

//   function minus(e) {
//     // Add the code for the minus function
//     e.preventDefault();
//     setResult((result) => result - Number(inputRef.current.value));
//   }

//   function times(e) {
//     // Add the code for the plus function
//     e.preventDefault();
//     setResult((result) => result * Number(inputRef.current.value));
//   }

//   function divide(e) {
//     // Add the code for the divide function
//     e.preventDefault();
//     setResult((result) => result / Number(inputRef.current.value));
//   }

//   function resetInput(e) {
//     // Add the code for the resetInput function
//     e.preventDefault();
//     inputRef.current.value = 0;
//   }

//   function resetResult(e) {
//     // Add the code for the resetResult function
//     e.preventDefault();
//     setResult((prevVal) => prevVal * 0);
//   }

//   return (
//     <div className="App">
//       <div>
//         <h1>Simplest Working Calculator</h1>
//       </div>
//       <form>
//         <div className="display">
//           <p ref={resultRef}>{result}</p>
//           <input
//             pattern="[0-9]"
//             ref={inputRef}
//             type="text"
//             placeholder="Type a number"
//
//           />
//         </div>
//      All numbers were fixed

//       </form>
//     </div>
//   );
// }

// export default App;
