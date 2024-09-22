import { useState, useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  function plus(e) {
    e.preventDefault();
    setResult((result) => result + Number(inputRef.current.value));
  }

  function minus(e) {
    // Add the code for the minus function
    e.preventDefault();
    setResult((result) => result - Number(inputRef.current.value));
  }

  function times(e) {
    // Add the code for the plus function
    e.preventDefault();
    setResult((result) => result * Number(inputRef.current.value));
  }

  function divide(e) {
    // Add the code for the divide function
    e.preventDefault();
    setResult((result) => result / Number(inputRef.current.value));
  }

  function resetInput(e) {
    // Add the code for the resetInput function
    e.preventDefault();
    inputRef.current.value = 0;
  }

  function resetResult(e) {
    // Add the code for the resetResult function
    e.preventDefault();
    setResult((prevVal) => prevVal * 0);
  }

  return (
    <div className="App">
      <div>
        <h1>Simplest Working Calculator</h1>
      </div>
      <form>
        <p ref={resultRef}>{result}</p>
        <input
          pattern="[0-9]"
          ref={inputRef}
          type="number"
          placeholder="Type a number"
        />
        <button onClick={plus}>add</button>
        {/* Add the subtract button */}
        <button onClick={minus}>subtract</button>
        {/* Add the multiply button */}
        <button onClick={times}>multiply</button>
        {/* Add the divide button */}
        <button onClick={divide}>divide</button>
        {/* Add the resetInput button */}
        <button onClick={resetInput}>reset Input</button>
        {/* Add the resetResult button */}
        <button onClick={resetResult}>reset Result</button>
      </form>
    </div>
  );
}

export default App;

// import React from "react";
// import ReactPlayer from "react-player/youtube";

// const App = () => {
//   return (
//     <div>
//       <MyVideo />
//     </div>
//   );
// };

// const MyVideo = () => {
//   return <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />;
// };

// export default App;

// import logo from "./logo.svg";
// import "./App.css";

// import { useState } from "react";
// import "./App.css";
// import Homepage from "./Homepage";
// import AboutLittleLemon from "./AboutLittleLemon";
// import Contact from "./Contact";
// import { Routes, Route, Link } from "react-router-dom";

// function App() {
//   return (
//     <div>
//       <nav>
//         <Link to="/" className="nav-item">
//           Homepage
//         </Link>
//         <Link to="/about" className="nav-item">
//           About Little Lemon
//         </Link>
//         <Link to="/contact" className="nav-item">
//           Contact
//         </Link>
//       </nav>
//       <Routes>
//         <Route path="/" element={<Homepage />}></Route>
//         <Route path="/about" element={<AboutLittleLemon />}></Route>
//         <Route path="/contact" element={<Contact />}></Route>
//       </Routes>
//     </div>
//   );
// }

// export default App;

// export default function RegisterForm() {
//   const [form, setForm] = useState({
//     firstName: "Luke",
//     lastName: "Jones",
//     email: "lukeJones@sculpture.com",
//   });

//   return (
//     <>
//       <label>
//         First name:
//         <input
//           value={form.firstName}
//           onChange={(e) => {
//             setForm({
//               ...form,
//               firstName: e.target.value,
//             });
//           }}
//         />
//       </label>
//       <label>
//         Last name:
//         <input
//           value={form.lastName}
//           onChange={(e) => {
//             setForm({
//               ...form,
//               lastName: e.target.value,
//             });
//           }}
//         />
//       </label>
//       <label>
//         Email:
//         <input
//           value={form.email}
//           onChange={(e) => {
//             setForm({
//               ...form,
//               email: e.target.value,
//             });
//           }}
//         />
//       </label>
//       <p>
//         {form.firstName} {form.lastName} ({form.email})
//       </p>
//     </>
//   );
// }
//hooks
// import { useState } from "react";
// export default function InputComponent() {
//   const [inputText, setText] = useState("hello");

//   function handleChange(e) {
//     setText(e.target.value);
//   }

//   return (
//     <>
//       <input value={inputText} onChange={handleChange} />
//       <p>You typed: {inputText}</p>
//       <button onClick={() => setText("hello")}>Reset</button>
//     </>
//   );
// }
// function Header() {
//   return <h1>Hello World!</h1>;
// }
// function App() {
//   return <Header />;
// }

// export default App;
