import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export function Chart({ data }) {
  let values = data.values;
  let color = data.name === 'Market Price (USD)' ? 'green' : 'blue';
  const xValues = values.map((value) => value.x);
  const yValues = values.map((value) => value.y);
  return (
    <section className="chart-container flex column text-center">
      <h1 className="chartTitle">{data.name}</h1>
      <Sparklines data={(xValues, yValues)} className="cart">
        <SparklinesLine color={color} />
      </Sparklines>
    </section>
  );
}
