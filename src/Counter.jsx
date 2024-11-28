import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "10px",
        borderRadius: "5px",
        textAlign: "center",
      }}
    >
      <p>You clicked the button {count} times.</p>
      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: "10px 20px",
          backgroundColor: "#007BFF",
          color: "#fff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Click me!
      </button>
    </div>
  );
};

export default Counter;
