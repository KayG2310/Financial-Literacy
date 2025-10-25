import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Login from "./pages/Login";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Expenses from "./pages/Expenses";
import Goals from "./pages/Goals";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // auth state

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route
          path="/home"
          element={isLoggedIn ? <Home /> : <Navigate to="/" />}
        />
        <Route
          path="/articles"
          element={isLoggedIn ? <Articles /> : <Navigate to="/" />}
        />
        <Route
          path="/expenses"
          element={isLoggedIn ? <Expenses /> : <Navigate to="/" />}
        />
        <Route
          path="/goals"
          element={isLoggedIn ? <Goals /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
}

export default App;
