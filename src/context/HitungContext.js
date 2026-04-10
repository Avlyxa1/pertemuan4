import React, { createContext, useState } from "react";

export const CounterContext = createContext();

export const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);

  const increment = () => {
    const newValue = count + 1;
    setCount(newValue);
    setHistory([...history, newValue]);
  };

  const reset = () => {
    setCount(0);
    setHistory([]);
  };

  return (
    <CounterContext.Provider value={{ count, increment, reset, history }}>
      {children}
    </CounterContext.Provider>
  );
};