import "./styles.css";
import React, { useState } from "react";

function App() {
  const [targetKeys, setTargetKeys] = useState("asdfjkl;");
  const [inputValue, setInputValue] = useState("");
  const [feedback, setFeedback] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleInputChange = (e) => {
    const input = e.target.value;
    if (input === targetKeys) {
      setFeedback("Correct!");
      setCurrentIndex(0);
      setTargetKeys(generateKeys());
      setInputValue("");
    } else if (
      input.length > targetKeys.length ||
      input[currentIndex] != targetKeys[currentIndex]
    ) {
      setFeedback("Incorrect!");
    } else {
      setFeedback("");
      setCurrentIndex(currentIndex + 1);
    }
    setInputValue(input);
  };
  const generateKeys = () => {
    const keys = "asdfjkl;";
    const shuffleKeys = keys
      .split("")
      .sort(() => 0.5 - Math.random())
      .join("");
    return shuffleKeys;
  };
  return (
    <>
      <div className="container">
        <h1>Touch Typing </h1>
        <p>Type the following keys:</p>
        <p id="target">{targetKeys}</p>
        <input
          type="text"
          id="input"
          autoFocus
          value={inputValue}
          onChange={handleInputChange}
        ></input>
        <p id="feedback">{feedback}</p>
      </div>
    </>
  );
}

export default App;
