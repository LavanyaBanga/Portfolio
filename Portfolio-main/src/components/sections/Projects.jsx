import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const projects = [
   {
  title: "FLAMES Game",
  description:
    "A fun Python project that predicts relationship compatibility using the classic FLAMES logic. Simple CLI-based interaction with a nostalgic twist.",
  techStack: ["Python"],
  link: "https://github.com/LavanyaBanga/Flames-Game-using-python",
},

    {
      title: "InternEase",
      description:
        "A MERN-based platform to explore internships, events, courses, and AI-powered chatbot suggestions. Divided into Student and Organizer modules.",
      techStack: ["React", "Node.js", "Express", "MongoDB"],
      link: "https://github.com/LavanyaBanga/internEase-Frontend", 
      
    },
    {
      title: "Emotional ChatBox",
      description:
        "An empathetic AI-powered chatbox designed to listen, comfort, and support users emotionally using soft UI and sentiment-aware responses.",
      techStack: ["Python"],
      link: "https://github.com/LavanyaBanga/emotional-chatbox", 
     
    },
    {
      title: "Pokemon API fetcher",
      description:
        "A Python-based CLI tool to track daily solved LeetCode problems and sync progress.",
      techStack: ["HTML,CSS,Javascript"],
      link: "https://github.com/LavanyaBanga/fetching_pokemonapi", 
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 bg-black text-white">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
            My Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="border border-white/10 rounded-xl p-6 bg-white/5 hover:-translate-y-1 transition-all"
              >
                <h3 className="text-xl font-semibold mb-2 text-blue-400">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-500/10 text-blue-400 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 transition"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white text-sm px-4 py-2 rounded hover:bg-blue-700 transition"
                  >
                    View Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-600 text-white text-sm px-4 py-2 rounded hover:bg-green-700 transition"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
