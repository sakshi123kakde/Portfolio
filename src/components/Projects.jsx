import React from "react";
import { ExternalLink } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Buy Buddy Ecommerce",
      period: "Apr 2025 - May 2025",
      description:
        "E-commerce clothing website with user registration, product browsing, shopping cart, wishlist and secure checkout.",
      tech: ["Angular", "Node.js", "Express.js", "PostgreSQL"],
      gradient: "linear-gradient(135deg, #a855f7, #ec4899)",
    },
    {
      title: "Community Homestay",
      period: "Feb 2024 - June 2024",
      description:
        "Platform connecting travelers with local hosts for authentic experiences in Chh Sambhaji Nagar.",
      tech: ["Android Studio", "Firebase"],
      gradient: "linear-gradient(135deg, #3b82f6, #06b6d4)",
    },
    {
      title: "Nanonest",
      period: "Sep 2024 - Nov 2024",
      description:
        "Investor and Entrepreneur Communication Platform enabling seamless collaboration and project investments.",
      tech: ["React.js", "Firebase"],
      gradient: "linear-gradient(135deg, #10b981, #14b8a6)",
    },
    {
      title: "TodoList App",
      period: "Dec 2024",
      description:
        "Efficient task management app with categorization, prioritization, due dates, and completion tracking.",
      tech: ["React", "Vite", "Node.js", "Express.js", "Mongoose"],
      gradient: "linear-gradient(135deg, #f97316, #ef4444)",
    },
  ];

  return (
    <section id="projects" className="py-5">
      <div className="container">
        <h2
          className="text-center fw-bold mb-5"
          style={{
            fontSize: "2.5rem",
            background: "linear-gradient(to right, #c084fc, #f472b6)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Featured Projects
        </h2>

        <div className="row g-4">
          {projects.map((project, index) => (
            <div key={index} className="col-md-6">
              <div
                className="rounded overflow-hidden h-100"
                style={{
                  backgroundColor: "rgba(31, 41, 55, 0.5)",
                  backdropFilter: "blur(4px)",
                  border: "1px solid #374151",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = "#a855f7";
                  e.target.style.transform = "scale(1.02)";
                  e.target.style.boxShadow =
                    "0 20px 40px rgba(168, 85, 247, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = "#374151";
                  e.target.style.transform = "scale(1)";
                  e.target.style.boxShadow = "none";
                }}
              >
                <div
                  style={{ height: "4px", background: project.gradient }}
                ></div>
                <div className="p-4">
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <h3 className="fs-5 fw-semibold text-white mb-0">
                      {project.title}
                    </h3>
                    <ExternalLink size={20} style={{ color: "#9ca3af" }} />
                  </div>

                  <p className="small mb-3" style={{ color: "#9ca3af" }}>
                    {project.period}
                  </p>
                  <p
                    className="mb-4"
                    style={{ color: "#d1d5db", lineHeight: 1.6 }}
                  >
                    {project.description}
                  </p>

                  <div className="d-flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 rounded-pill small"
                        style={{
                          backgroundColor: "#374151",
                          color: "#d1d5db",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = "#a855f7";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = "#374151";
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
