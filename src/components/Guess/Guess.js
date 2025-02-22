import React from "react";

import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ value, status }) {
  const className = status ? `cell ${status}` : "cell";

  return <span className={className}>{value || undefined}</span>;
}

function Guess({ value, answer }) {
  const checkedValue = value && checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map((num) => (
        <Cell
          key={num}
          value={value && value[num]}
          status={value && checkedValue[num].status}
        />
      ))}
    </p>
  );
}

export default Guess;
