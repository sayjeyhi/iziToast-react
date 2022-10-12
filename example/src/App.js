import React, { useEffect } from "react";

// lib
import { useToast, immediateToast } from "izitoast-react";
import "izitoast-react/dist/iziToast.css";

const App = () => {
  const showMessage = useToast({
    title: "Test",
    message: "Show my message :)",
    theme: "light",
    icon: "warn"
  });

  useEffect(() => {
    immediateToast("info", {
      message: "Hi, how it is going",
      timeout: 500000
    });
  });

  return (
    <div>
      <button onClick={showMessage}>Show</button>
    </div>
  );
};

export default App;
