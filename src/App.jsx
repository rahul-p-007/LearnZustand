import React from "react";
import { useCounter } from "./store/atom/counter";

function App() {
  return (
    <div className="center">
      <Buttons />
      <Counter />
      <IsEven />
    </div>
  );
}

export default App;

function Buttons() {
  const increase = useCounter((state) => state.increase);
  const decrease = useCounter((state) => state.decrease);
  const theme = useCounter((state) => state.theme);
  const toggleTheme = useCounter((state) => state.toggleTheme);
  return (
    <div>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <h1 className={theme ? "dark" : "light"}>Current Theme</h1>
      <button onClick={toggleTheme}>Change Theme {theme ? "☀" : "🌙"}</button>
    </div>
  );
}
function Counter() {
  const count = useCounter((state) => state.count);
  return (
    <>
      <h3>{count}</h3>
    </>
  );
}
function IsEven() {
  const { count } = useCounter((state) => state.count);
  return (
    <div>
      <h2>{count % 2 === 0 ? "Even" : "Odd"}</h2>
    </div>
  );
}
