// App.js
import { useState } from "react";
import Login from "../src/Components/Login";
import Books from "../src/Components/Books";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      {isLoggedIn ? <Books /> : <Login onLoginSuccess={handleLogin} />}
    </div>
  );
}

export default App;
