import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HomeContainer } from './containers/homeContainer/HomeContainer';
import { AboutContainer } from './containers/aboutContainer/AboutContainer';
import { ProjectsContainer } from './containers/projectsContainer/ProjectsContainer';
import { ResumeContainer } from './containers/resumeContainer/ResumeContainer';
import { Navbar } from './components/navbar/Navbar';
import { Footer } from "./components/footer/Footer";


function App() {


  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeContainer mensaje={"SECCION HOME"} />}></Route>
        <Route path="/about" element={<AboutContainer mensaje={"SECCION ABOUT"} />}></Route>
        <Route path="/projects" element={<ProjectsContainer mensaje={"SECCION PROJECTS"} />}></Route>
        <Route path="/resume" element={<ResumeContainer mensaje={"SECCION RESUME"} />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>


  );

}

export default App;
