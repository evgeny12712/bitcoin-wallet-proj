import React from 'react';

export default function TransferFund() {
  transfer = () => {};
  return (
    <section>
      <input type="text" placeholder="Amount" />
      <button onClick={transfer}>Submit</button>
    </section>
  );
}
