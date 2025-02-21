import React from "react";

import { range, sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import Guess from "../Guess/Guess";
import GameOverScreen from "../GameOverScreen";

import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

// Pick a random word on every pageload.
// const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
// console.info({ answer });

// Get keys for our rows
const ROWS = range(NUM_OF_GUESSES_ALLOWED).map(() => crypto.randomUUID());

function Game() {
  const [answer, setAnswer] = React.useState(() => sample(WORDS));
  const [guesses, setGuesses] = React.useState([]);
  const [gameState, setGameState] = React.useState("playing"); // "won" | "playing" | "lost"
  console.info({ answer });
  const updateGuesses = (newGuess) => {
    if (gameState !== "playing") return;
    console.log(answer, newGuess);
    const newGuesses = [
      ...guesses,
      { id: crypto.randomUUID(), guess: newGuess },
    ];
    setGuesses(newGuesses);
    if (newGuess === answer) setGameState("won");
  };

  const resetGame = () => {
    setAnswer(sample(WORDS)); // We could check that's not the same word? :P
    setGuesses([]);
    setGameState("playing");
  };

  console.log(guesses);

  return (
    <>
      <div className="guess-resutls">
        {ROWS.map((rowId, index) => (
          <Guess key={rowId} value={guesses[index]?.guess} answer={answer} />
        ))}
      </div>
      {gameState === "playing" ? (
        <GuessInput updateGuesses={updateGuesses} />
      ) : (
        <GameOverScreen
          gameState={gameState}
          answer={answer}
          handleReset={resetGame}
        />
      )}
    </>
  );
}

export default Game;
