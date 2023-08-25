import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./component/Navigation";
import "./styles/App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <>
      <Navigation />
      <main>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/project" element={<ProjectPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
