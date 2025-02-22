import React from "react";

function GuessInput({ updateGuesses }) {
  const [guess, setGuess] = React.useState("");
  const [validationError, setValidationError] = React.useState("");
  const inputRef = React.useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateGuesses(guess);
    setGuess("");
    setValidationError("");
  };

  const handleChange = (e) => {
    setGuess(e.target.value.toUpperCase());
  };

  // Just goofing around with the HTML validation API.
  // I think validating on the changeHandler using the
  // value stored in state is probably better, but it was fun.
  // The pop-up message is horribly placed tho (or my validation
  // alert, hehe)
  React.useEffect(() => {
    const input = inputRef?.current;

    if (!input) return;

    const listener = () => {
      if (input.validity.valueMissing) {
        setValidationError("Value is required.");
      } else if (input.validity.tooShort) {
        setValidationError("Not enough characters entered (5 are required).");
      } else if (input.validity.patternMismatch) {
        setValidationError("Only letters A to Z are allowed.");
      } else {
        setValidationError("");
      }
    };

    input.addEventListener("input", listener);

    return () => input.removeEventListener("input", listener);
  }, []);

  return (
    <form className="guess-input-wrapper" onSubmit={handleSubmit}>
      <label htmlFor="guess-input">Enter guess</label>
      <input
        ref={inputRef}
        pattern="[a-zA-Z]{5}"
        title="Only letters A to Z"
        minLength={5}
        maxLength={5}
        id="guess-input"
        type="text"
        value={guess}
        onChange={handleChange}
        required
      />
      {validationError && <span>{validationError}</span>}
    </form>
  );
}

export default GuessInput;
