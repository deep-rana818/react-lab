TextDisplay.jsx

import { useState } from "react";

function TextDisplay() {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        placeholder="Type something..."
        onChange={(e) => setText(e.target.value)}
      />

      <p>You typed → {text}</p>
    </div>
  );
}

export default TextDisplay;