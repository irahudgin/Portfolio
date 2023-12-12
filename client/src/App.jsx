import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

function App() {
    return (
        <div className="first">
            <Hero />
            <Projects />
            <Skills />
            <Contact />
        </div>
    );
}

export default App;
