import { useContext, useState } from "react";

import { ThemeContext } from "./context/ThemeContext";

import Loader from "./components/Loader";
import SmoothScroll from "./components/SmoothScroll";
import CustomCursor from "./components/CustomCursor";
import FloatingBackground from "./components/FloatingBackground";
import Timeline from "./sections/Timeline";
import CodingStats from "./sections/CodingStats";

import Navbar from "./components/Navbar";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Resume from "./sections/Resume";

function App() {
  const [loading, setLoading] = useState(true);

  const { theme } = useContext(ThemeContext);

  return (
    <>
      {loading ? (
        <Loader onComplete={() => setLoading(false)} />
      ) : (
        <main
          className={`overflow-hidden transition-all duration-500
          
          ${theme === "dark" ? "bg-black text-white" : "bg-white text-black"}`}
        >
          <SmoothScroll />

          <CustomCursor />

          <FloatingBackground />

          <Navbar />

          <Hero />

          <About />

          <Timeline />

          <Skills />

          {/* <TechOrbit /> */}

          <Projects />

          <CodingStats />

          <Resume />

          <Contact />
        </main>
      )}
    </>
  );
}

export default App;
