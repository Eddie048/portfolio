import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import NoMatch from "./pages/NoMatch.tsx";
import React from "react";
import ProjectPage from "./pages/ProjectPage.tsx";
import { projects } from "./assets/index.tsx";

function App() {
  return (
    <div className="font-[inter]">
      <Routes>
        <Route path="/" element={<Home />} />
        {projects.map(({ projectTitle, pageAddress, content, links }) => (
          <Route
            path={pageAddress}
            element={
              <ProjectPage
                projectName={projectTitle}
                content={content}
                links={links}
              />
            }
          />
        ))}
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
