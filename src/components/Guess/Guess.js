import React from "react";

import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

const getUniqueCells = () => {
  return range(5).map(() => crypto.randomUUID());
};

function Guess({ value, answer }) {
  const checkedValue = value && checkGuess(value, answer);

  return (
    <p className="guess">
      {getUniqueCells().map((cellId, index) => (
        <span
          key={cellId}
          className={`cell ${value && checkedValue[index].status}`}
        >
          {value && value[index]}
        </span>
      ))}
    </p>
  );
}

export default Guess;
