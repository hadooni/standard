import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Status from "./components/Status";
import Counter from "./components/Counter";
import Content from "./components/Content";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const title = "Counter App";
  const year = 2024;

  return (
    <div>
      <Header title={title} />
      <Content />

      <div>
        <Status count={count} />
        <Counter count={count} increment={increment} />
      </div>

      <Footer year={year} />
    </div>
  );
}

export default App;
