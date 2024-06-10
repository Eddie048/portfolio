import Home from "./components/Home.tsx";
import Navbar from "./components/Navbar.tsx";
import Skills from "./components/Skills.tsx";

function App() {
  return (
    <div className="font-[inter]">
      <Navbar />
      <Home />
      <Skills/>
    </div>
  );
}

export default App;
