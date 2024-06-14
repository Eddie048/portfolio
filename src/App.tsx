import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import NoMatch from "./pages/NoMatch.tsx";
import React from "react";
import { projectPages } from "./assets/index.tsx";
import ProjectPage from "./pages/ProjectPage.tsx";

function App() {
  return (
    <div className="font-[inter]">
      <Routes>
        <Route path="/" element={<Home />} />
        {projectPages.map(({ projectName, pageAddress, content, links }) => (
          <Route
            path={pageAddress}
            element={
              <ProjectPage
                projectName={projectName}
                pageAddress={pageAddress}
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
