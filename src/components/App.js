import Bill from "./Bill";
import Service from "./Service";
import Reset from "./Reset";
import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState(0);
  const [service1, setService1] = useState(0);
  const [service2, setService2] = useState(0);
  const tip = ((+service1 + +service2) / 2 / 100) * bill;

  function reset() {
    setBill(0);
    setService1(0);
    setService2(0);
  }

  return (
    <div>
      <Bill bill={bill} handleBill={setBill} />

      <Service service={service1} onSelect={setService1}>
        <p>How did you like the service?</p>
      </Service>

      <Service service={service2} onSelect={setService2}>
        <p>How did your friend like the service?</p>
      </Service>
      <Reset onReset={reset} />

      <h1>
        You pay ${bill + tip} (${bill} + ${tip}tip)
      </h1>
    </div>
  );
}
