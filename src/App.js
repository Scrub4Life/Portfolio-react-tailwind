import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
// importing react components
// import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import SocialLinks from "./components/SocialLinks";

import projectsArray from "./projects";

function App() {
  return (
    <Router>
      <header>
        <Navbar NavLink={NavLink} />
      </header>
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          {/* <Route path="about" element={<About />} /> */}
          <Route path="skills" element={<Skills />} />
          <Route
            path="projects"
            element={<Projects delay={7 + projectsArray.id * 1} />}
          />
          <Route path="contact" element={<Contact />} />
        </Routes>
        <SocialLinks />
      </main>
    </Router>
  );
}

export default App;
