import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendskills = ["HTML", "React", "CSS", "TailwindCSS", "Javascript"];
  const backendskills = ["Express.js", "Python"];
  const exploring = [
    "Programming(Java)",
    "Python (for project)",
    "DSA (LeetCode)",
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >   
       <RevealOnScroll>
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent text-center">
          About Me
        </h2>
        <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
          <p className="text-[#94a3b8] text-lg mb-8 max-w-2xl mx-auto text-center">
          Hi, I’m Lavanya Banga — a curious mind currently exploring the MERN stack and Data Science, turning my passion for tech into real, impactful projects. I love experimenting, learning from bugs, and growing through every challenge.

          When I’m not coding, you’ll probably find me reading novels, listening to soft music, or dreaming up the next cool idea. For me, it’s all about creating with heart, learning with consistency, and leveling up every single day — both as a developer and as a person.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {frontendskills.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {backendskills.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">🏫 Education</h3>
            <li>
              <strong>B.Tech in Computer Science</strong> – GLA University
              (2023–2027)
            </li>
          </div>

          <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
            <h3 className="text-xl font-bold mb-4">Exploring Skills</h3>
            <div className="flex flex-wrap gap-2">
              {exploring.map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </section>
  );
};
