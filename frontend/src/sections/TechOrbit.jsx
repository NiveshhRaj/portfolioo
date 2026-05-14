import Marquee from "react-fast-marquee";

function TechOrbit() {
  const techs = [
    "Java",
    "Spring Boot",
    "React",
    "MySQL",
    "Next.js",
    "Tailwind CSS",
    "MongoDB",
    "Node.js",
    "AWS",
    "GSAP",
    "Three.js",
    "Git",
    "GitHub",
  ];

  return (
    <section className="py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-6xl font-bold text-center">
          Tech{" "}
          <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            Orbit
          </span>
        </h1>

        <p className="text-gray-400 text-center mt-8">
          Technologies and tools I work with
        </p>

        <div className="mt-20">
          <Marquee speed={60} gradient={false}>
            {techs.map((tech, index) => (
              <div
                key={index}
                className="mx-6 px-10 py-5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xl hover:scale-110 transition"
              >
                {tech}
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

export default TechOrbit;
