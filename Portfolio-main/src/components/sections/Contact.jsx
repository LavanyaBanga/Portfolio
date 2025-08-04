import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";


export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY)
      .then((result) => {
        alert("Message sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong, message not sent"));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-full max-w-xl">
          <h2 className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent">
            Get in Touch with Me
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/10"
                placeholder="Your Name..."
              />
            </div>

            <div className="relative">
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/10"
                placeholder="example@gmail.com"
              />
            </div>

            <div className="relative">
              <textarea
                name="message"
                required
                value={formData.message}
                rows={5}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/10"
                placeholder="Your Message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
          </form>

         <div className="text-center mt-6">
  <p className="text-gray-400 text-sm">
    Or connect with me on{" "}
    <a
      href="https://www.linkedin.com/in/lavanya-banga-0a00692b1/" 
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 hover:underline"
    >
      LinkedIn
    </a>
  </p>
</div>



<div className="text-center mt-2">
  <p className="text-gray-400 text-sm">
    Also check out my{" "}
    <a
      href="https://github.com/LavanyaBanga" 
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-400 hover:underline"
    >
      GitHub
    </a>
  </p>
</div>


        </div>
      </RevealOnScroll>
    </section>
  );
};
