import { HashRouter, Routes, Route } from "react-router-dom";
import Test from "./views/test";
import Me from "./views/me";
import Blog from "./views/blog";
import Notes from "./views/notes";
import Project from "./views/project";
import Stack from "./views/stack";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Me />} />
          <Route path="/test" element={<Test />} />
          <Route path="/me" element={<Me />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/project" element={<Project />} />
          <Route path="/stack" element={<Stack />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
