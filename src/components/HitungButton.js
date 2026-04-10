import { useContext } from "react";
import { CounterContext } from "../context/HitungContext";

const HitungButton = () => {
  const { increment } = useContext(CounterContext);
  return <button onClick={increment}>Tambah</button>;
};

export default HitungButton;