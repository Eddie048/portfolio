import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import NoMatch from "./pages/NoMatch.tsx";
import React from "react";
import ProjectPage from "./pages/ProjectPage.tsx";
import { projects } from "./assets/index.tsx";
import { useOverlayScrollbars } from "overlayscrollbars-react";
import AboutMe from "./pages/AboutMe.tsx";

function App() {
  const [initBodyOverlayScrollbars] = useOverlayScrollbars({
    defer: true,
    options: {
      scrollbars: {
        autoHide: "scroll",
      },
    },
  });

  initBodyOverlayScrollbars({
    target: document.body,
    cancel: {
      body: false,
    },
  });

  return (
    <div className="font-[inter]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-me" element={<AboutMe />} />
        {projects.map(({ projectTitle, pageAddress, content, links }) => (
          <Route
            path={pageAddress}
            key={projectTitle}
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
