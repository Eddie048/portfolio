import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";

function App() {
  return (
    <div className="font-[inter]">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
