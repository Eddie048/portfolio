import Home from "./components/Home.tsx";
import Navbar from "./components/Navbar.tsx";
import Skills from "./components/Skills.tsx";
import Projects from "./components/Projects.tsx";

function App() {
  return (
    <div className="font-[inter]">
      <Navbar />
      <Home />
      <Skills/>
      <Projects/>
    </div>
  );
}

export default App;
