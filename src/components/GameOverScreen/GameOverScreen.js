import React from "react";

function GameOverScreen({ gameState, handleReset, answer }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        flexShrink: 0,
        flexGrow: 1,
        minWidth: 400,
      }}
    >
      {gameState === "won" ? (
        <p>
          You won! the answer was <strong>{answer}</strong>
        </p>
      ) : (
        <p>
          Better luck next time! The answer was: <strong>{answer}</strong>
        </p>
      )}
      <button type="button" onClick={handleReset}>
        Play again
      </button>
    </div>
  );
}

export default GameOverScreen;
