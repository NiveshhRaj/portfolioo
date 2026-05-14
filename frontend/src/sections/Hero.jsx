import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import gsap from "gsap";
import FloatingSphere from "../components/FloatingSphere";

function Hero() {
  const heroRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      {
        opacity: 0,
        y: 100,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1.5,
      },
    );
  }, []);

  return (
    <section className="relative h-screen flex justify-center items-center overflow-hidden" id="home">
      {/*Floating Sphere */}

      <FloatingSphere />

      {/* Glow */}

      <div className="absolute w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl"></div>

      {/* Content */}

      <div ref={heroRef} className="z-10 text-center">
        <h1 className="text-7xl md:text-8xl font-bold leading-tight">
          Hi, I&apos;m{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Niveshhraj
          </span>
        </h1>

        <p className="mt-6 text-2xl text-gray-400">Full Stack Developer</p>

        <p className="mt-6 text-gray-500 max-w-2xl mx-auto leading-8">
          Building modern scalable full stack applications with beautiful
          animations and premium UI experiences.
        </p>

        {/* Buttons */}

        <div className="flex justify-center gap-5 mt-10">
          <button className="px-8 py-4 rounded-full bg-purple-600 hover:bg-purple-700 transition">
            <a href="#projects" className="text-white">
              View Projects
            </a>
          </button>

          <button className="px-8 py-4 rounded-full border border-gray-700 hover:border-purple-500 transition">
            <a href="#contact">Contact Me</a>
          </button>
        </div>

        {/* Icons */}

        <div className="flex justify-center gap-6 mt-10 text-3xl">
          <a href="https://github.com/NiveshhRaj"><FaGithub className="hover:text-purple-400 cursor-pointer transition" /></a>

          <a href="https://www.linkedin.com/in/niveshhraj"><FaLinkedin className="hover:text-purple-400 cursor-pointer transition" /></a>
        </div>
      </div>

      {/* Scroll */}

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="absolute bottom-10 text-gray-500"
      >
        Scroll Down
      </motion.div>
    </section>
  );
}

export default Hero;
