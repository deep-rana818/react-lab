ToggleMessage.jsx

import { useState } from "react";

function ToggleMessage() {
  const [show, setShow] = useState(false);

  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Message" : "Show Message"}
      </button>

      {show && <p>Welcome to React</p>}
    </div>
  );
}

export default ToggleMessage;