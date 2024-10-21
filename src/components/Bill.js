import { useState } from "react";

export default function Bill({ bill, handleBill }) {
  function billToggle(e) {
    const value = Number(e.target.value);
    if (!isNaN(value)) {
      handleBill(value);
    } else {
      handleBill(0);
    }
  }

  return (
    <div>
      <p>How much was the bill?</p>
      <input type="text" value={bill} onChange={billToggle} />
    </div>
  );
}
