import { HashRouter, Routes, Route } from "react-router-dom";
import Test from "./views/test";
import Me from "./views/me";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Me />} />
          <Route path="/test" element={<Test />} />
          <Route path="/me" element={<Me />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
