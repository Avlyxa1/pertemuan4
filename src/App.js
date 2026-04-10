import React from "react";
import { CounterProvider } from "./context/HitungContext";
import HitungDisplay from "./components/HitungDisplay";
import HitungButton from "./components/HitungButton";
import ResetButton from "./components/ResetButton";
import HistoryList from "./components/HistoryList";

console.log("Display:", HitungDisplay);
console.log("Button:", HitungButton);
console.log("Reset:", ResetButton);
console.log("History:", HistoryList);

function App() {
  return (
    <CounterProvider>
      <h1>Tugas Pertemuan 4</h1>
      <HitungDisplay />
      <HitungButton />
      <ResetButton />
      <HistoryList />
    </CounterProvider>
  );
}

export default App;