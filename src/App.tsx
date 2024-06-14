import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import NoMatch from "./pages/NoMatch.tsx";
import React from "react";

function App() {
  return (
    <div className="font-[inter]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
