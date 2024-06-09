import Home from "./components/Home.tsx";
import Navbar from "./components/Navbar.tsx";
import Skills from "./components/Skills.tsx";

function App() {
  return (
    <body className="font-[inter]">
      <Navbar />
      <Home />
      <Skills/>
    </body>
  );
}

export default App;
