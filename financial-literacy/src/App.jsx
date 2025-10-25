import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import pages (we'll create them next)
import Login from "./pages/Login";
import Home from "./pages/Home";
import Articles from "./pages/Articles";
import Expenses from "./pages/Expenses";
import Goals from "./pages/Goals";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/expenses" element={<Expenses />} />
        <Route path="/goals" element={<Goals />} />
      </Routes>
    </Router>
  );
}

export default App;
