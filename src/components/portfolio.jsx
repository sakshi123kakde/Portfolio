import React, { useState, useEffect } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Users,
  Code,
  Briefcase,
  GraduationCap,
  Award,
  ExternalLink,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

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

  const experiences = [
    {
      title: "Web Developer",
      company: "Just Logic Software Pvt Ltd",
      period: "Feb 2025 - June 2025",
      type: "Hybrid",
      description:
        "Currently pursuing a 4-month internship as an Intern Trainee Engineer, contributing to ongoing projects while aligning with company goals.",
      icon: "💻",
    },
    {
      title: "Emerging Technologies (AI And Cloud)",
      company: "IBM",
      period: "Dec 2023 - Jan 2024",
      type: "Virtual",
      description:
        "Hands-on experience with AI algorithms and cloud computing through practical applications.",
      icon: "🤖",
    },
    {
      title: "Web Development",
      company: "Sumago Infotech Pvt Ltd",
      period: "Mar 2021 - June 2021",
      type: "Virtual",
      description:
        "Enhanced technical skills through practical tasks and real-world web development scenarios.",
      icon: "🌐",
    },
  ];

  const skills = [
    { name: "React.js", level: 90, color: "#3b82f6" },
    { name: "Node.js", level: 85, color: "#10b981" },
    { name: "JavaScript", level: 88, color: "#fbbf24" },
    { name: "Java", level: 80, color: "#ef4444" },
    { name: "Angular", level: 75, color: "#dc2626" },
    { name: "Express.js", level: 85, color: "#4b5563" },
    { name: "SQL", level: 78, color: "#2563eb" },
    { name: "Firebase", level: 82, color: "#f97316" },
  ];

  return (
    <>
      {/* Bootstrap CSS CDN */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/css/bootstrap.min.css"
        rel="stylesheet"
      />

      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#111827",
          color: "white",
          overflowX: "hidden",
        }}
      >
        {/* Animated Background */}
        <div
          style={{
            position: "fixed",
            inset: 0,
            overflow: "hidden",
            pointerEvents: "none",
            zIndex: 0,
          }}
        >
          <div
            style={{
              position: "absolute",
              width: "384px",
              height: "384px",
              background: "rgba(168, 85, 247, 0.1)",
              borderRadius: "50%",
              filter: "blur(60px)",
              animation: "pulse 2s infinite",
              left: mousePosition.x / 10,
              top: mousePosition.y / 10,
              transform: "translate(-50%, -50%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "25%",
              right: "25%",
              width: "256px",
              height: "256px",
              background: "rgba(59, 130, 246, 0.1)",
              borderRadius: "50%",
              filter: "blur(60px)",
              animation: "bounce 2s infinite",
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: "25%",
              left: "33%",
              width: "320px",
              height: "320px",
              background: "rgba(236, 72, 153, 0.1)",
              borderRadius: "50%",
              filter: "blur(60px)",
              animation: "pulse 2s infinite",
            }}
          />
        </div>

        {/* Navigation */}
        <nav
          className="navbar navbar-expand-md navbar-dark fixed-top"
          style={{
            backgroundColor: "rgba(17, 24, 39, 0.8)",
            backdropFilter: "blur(12px)",
            borderBottom: "1px solid #374151",
            zIndex: 1050,
          }}
        >
          <div className="container-fluid">
            <a
              className="navbar-brand fw-bold fs-4"
              href="#"
              style={{
                background: "linear-gradient(to right, #c084fc, #f472b6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Sakshi Kakde
            </a>

            <button
              className="navbar-toggler border-0"
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              style={{ padding: "0.5rem" }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div
              className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
            >
              <ul className="navbar-nav ms-auto">
                {["About", "Experience", "Projects", "Skills", "Contact"].map(
                  (item) => (
                    <li className="nav-item" key={item}>
                      <a
                        className="nav-link px-3 py-2 rounded transition-all"
                        href={`#${item.toLowerCase()}`}
                        onClick={() => setIsMenuOpen(false)}
                        style={{
                          fontSize: "0.875rem",
                          transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => {
                          e.target.style.backgroundColor = "#374151";
                          e.target.style.transform = "scale(1.05)";
                        }}
                        onMouseLeave={(e) => {
                          e.target.style.backgroundColor = "transparent";
                          e.target.style.transform = "scale(1)";
                        }}
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section
          id="hero"
          className="d-flex align-items-center justify-content-center position-relative"
          style={{ minHeight: "100vh", paddingTop: "4rem", zIndex: 10 }}
        >
          <div className="text-center px-4">
            <div className="mb-5 position-relative">
              <div
                className="mx-auto d-flex align-items-center justify-content-center fw-bold fs-1"
                style={{
                  width: "128px",
                  height: "128px",
                  background: "linear-gradient(to right, #a855f7, #ec4899)",
                  borderRadius: "50%",
                  animation: "pulse 2s infinite",
                }}
              >
                SK
              </div>
              <div
                className="position-absolute top-0 start-50 translate-middle-x mx-auto"
                style={{
                  width: "128px",
                  height: "128px",
                  background: "linear-gradient(to right, #a855f7, #ec4899)",
                  borderRadius: "50%",
                  animation: "ping 1s infinite",
                  opacity: 0.2,
                }}
              />
            </div>

            <h1
              className="fw-bold mb-4"
              style={{
                fontSize: "clamp(3rem, 8vw, 5rem)",
                animation: "fadeIn 1s ease-out",
              }}
            >
              <span
                style={{
                  background:
                    "linear-gradient(to right, #c084fc, #f472b6, #60a5fa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Sakshi Kakde
              </span>
            </h1>

            <p
              className="fs-4 mb-4"
              style={{
                color: "#d1d5db",
                animation: "slideUp 1s ease-out 0.3s both",
              }}
            >
              Aspiring Software Developer
            </p>

            <p
              className="fs-5 mb-5 mx-auto"
              style={{
                color: "#9ca3af",
                maxWidth: "48rem",
                animation: "slideUp 1s ease-out 0.3s both",
              }}
            >
              Full-stack web developer with hands-on experience, eager to
              contribute to real-world software projects in dynamic tech
              companies.
            </p>

            <div className="d-flex flex-wrap justify-content-center gap-3 mb-5">
              <a
                href="mailto:sakshi.kakde2004@gmail.com"
                className="btn d-flex align-items-center gap-2 px-4 py-3 rounded-pill text-white text-decoration-none fw-medium"
                style={{
                  background: "linear-gradient(to right, #a855f7, #ec4899)",
                  border: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.05)";
                  e.target.style.boxShadow =
                    "0 10px 25px rgba(168, 85, 247, 0.25)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                  e.target.style.boxShadow = "none";
                }}
              >
                <Mail size={20} />
                Contact Me
              </a>
              <a
                href="#projects"
                className="btn d-flex align-items-center gap-2 px-4 py-3 rounded-pill text-white text-decoration-none fw-medium"
                style={{
                  border: "1px solid #4b5563",
                  backgroundColor: "transparent",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#1f2937";
                  e.target.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "transparent";
                  e.target.style.transform = "scale(1)";
                }}
              >
                <Code size={20} />
                View Projects
              </a>
            </div>

            <div className="d-flex justify-content-center gap-3">
              {[
                {
                  href: "mailto:sakshi.kakde2004@gmail.com",
                  icon: Mail,
                  color: "#a855f7",
                },
                { href: "tel:7083375279", icon: Phone, color: "#10b981" },
                { href: "#", icon: Linkedin, color: "#3b82f6" },
                { href: "#", icon: Github, color: "#6b7280" },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-3 rounded-circle text-white text-decoration-none"
                  style={{
                    backgroundColor: "#1f2937",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.backgroundColor = social.color;
                    e.target.style.transform = "scale(1.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.backgroundColor = "#1f2937";
                    e.target.style.transform = "scale(1)";
                  }}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </div>

          <div
            className="position-absolute bottom-0 start-50 translate-middle-x mb-4"
            style={{ animation: "bounce 2s infinite" }}
          >
            <ChevronDown size={32} style={{ color: "#9ca3af" }} />
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-5">
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
              About Me
            </h2>

            <div className="row g-5 align-items-center">
              <div className="col-md-6">
                <div className="d-flex flex-column gap-3">
                  <div
                    className="d-flex align-items-center gap-3"
                    style={{ color: "#d1d5db" }}
                  >
                    <MapPin
                      className="text-primary"
                      size={20}
                      style={{ color: "#c084fc !important" }}
                    />
                    <span>Chh. Sambhajinagar, Maharashtra</span>
                  </div>
                  <div
                    className="d-flex align-items-center gap-3"
                    style={{ color: "#d1d5db" }}
                  >
                    <Phone
                      className="text-primary"
                      size={20}
                      style={{ color: "#c084fc !important" }}
                    />
                    <span>7083375279</span>
                  </div>
                  <div
                    className="d-flex align-items-center gap-3"
                    style={{ color: "#d1d5db" }}
                  >
                    <Mail
                      className="text-primary"
                      size={20}
                      style={{ color: "#c084fc !important" }}
                    />
                    <span>sakshi.kakde2004@gmail.com</span>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <h3
                  className="fs-3 fw-semibold d-flex align-items-center gap-3 mb-4"
                  style={{ color: "#c084fc" }}
                >
                  <GraduationCap size={28} />
                  Education
                </h3>

                <div className="d-flex flex-column gap-3">
                  <div
                    className="p-4 rounded"
                    style={{
                      backgroundColor: "rgba(31, 41, 55, 0.5)",
                      backdropFilter: "blur(4px)",
                      border: "1px solid #374151",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.borderColor = "#a855f7";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.borderColor = "#374151";
                    }}
                  >
                    <h4 className="fw-semibold text-white mb-2">
                      B.Tech, Computer Science & Engineering
                    </h4>
                    <p className="mb-1" style={{ color: "#d1d5db" }}>
                      Deogiri Institute Of Engineering And Management Studies
                    </p>
                    <p className="small mb-0" style={{ color: "#9ca3af" }}>
                      2022 - 2025 | CGPA: 7.26/10
                    </p>
                  </div>

                  <div
                    className="p-4 rounded"
                    style={{
                      backgroundColor: "rgba(31, 41, 55, 0.5)",
                      backdropFilter: "blur(4px)",
                      border: "1px solid #374151",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.borderColor = "#a855f7";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.borderColor = "#374151";
                    }}
                  >
                    <h4 className="fw-semibold text-white mb-2">
                      Diploma, Information Technology
                    </h4>
                    <p className="mb-1" style={{ color: "#d1d5db" }}>
                      Government Polytechnic, Aurangabad
                    </p>
                    <p className="small mb-0" style={{ color: "#9ca3af" }}>
                      2019 - 2022 | Per: 88.65%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section
          id="experience"
          className="py-5"
          style={{ backgroundColor: "rgba(31, 41, 55, 0.3)" }}
        >
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
              Experience
            </h2>

            <div className="d-flex flex-column gap-4">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="p-4 rounded"
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
                  <div className="row align-items-center mb-3">
                    <div className="col-md-8">
                      <div className="d-flex align-items-center gap-3">
                        <span style={{ fontSize: "2rem" }}>{exp.icon}</span>
                        <div>
                          <h3 className="fs-5 fw-semibold text-white mb-1">
                            {exp.title}
                          </h3>
                          <p
                            className="fw-medium mb-0"
                            style={{ color: "#c084fc" }}
                          >
                            {exp.company}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-4 text-md-end">
                      <span
                        className="fw-medium d-block"
                        style={{ color: "#d1d5db" }}
                      >
                        {exp.period}
                      </span>
                      <span className="small" style={{ color: "#9ca3af" }}>
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  <p
                    className="mb-0"
                    style={{ color: "#d1d5db", lineHeight: 1.6 }}
                  >
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
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

        {/* Skills Section */}
        <section
          id="skills"
          className="py-5"
          style={{ backgroundColor: "rgba(31, 41, 55, 0.3)" }}
        >
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
              Technical Skills
            </h2>

            <div className="row g-4">
              {skills.map((skill, index) => (
                <div key={index} className="col-md-6">
                  <div className="mb-2">
                    <div className="d-flex justify-content-between align-items-center">
                      <span className="text-white fw-medium">{skill.name}</span>
                      <span className="small" style={{ color: "#9ca3af" }}>
                        {skill.level}%
                      </span>
                    </div>
                  </div>
                  <div
                    className="progress"
                    style={{ height: "12px", backgroundColor: "#374151" }}
                  >
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: `${skill.level}%`,
                        backgroundColor: skill.color,
                        transition: "width 1s ease-out",
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 text-center">
              <h3
                className="fs-3 fw-semibold mb-4"
                style={{ color: "#c084fc" }}
              >
                Tools & Technologies
              </h3>
              <div className="d-flex flex-wrap justify-content-center gap-3">
                {[
                  "VS Code",
                  "Eclipse",
                  "Android Studio",
                  "Git",
                  "Firebase",
                  "PostgreSQL",
                  "MongoDB",
                ].map((tool, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 rounded-pill"
                    style={{
                      backgroundColor: "#1f2937",
                      color: "#d1d5db",
                      border: "1px solid #4b5563",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.borderColor = "#a855f7";
                      e.target.style.backgroundColor = "#a855f7";
                      e.target.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.borderColor = "#4b5563";
                      e.target.style.backgroundColor = "#1f2937";
                      e.target.style.transform = "scale(1)";
                    }}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-5">
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
              Achievements & Activities
            </h2>

            <div className="row g-4">
              <div className="col-md-4">
                <div
                  className="p-4 rounded text-center h-100"
                  style={{
                    backgroundColor: "rgba(31, 41, 55, 0.5)",
                    backdropFilter: "blur(4px)",
                    border: "1px solid #374151",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = "#a855f7";
                    e.target.style.transform = "scale(1.02)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = "#374151";
                    e.target.style.transform = "scale(1)";
                  }}
                >
                  <Award
                    className="mx-auto mb-3"
                    size={48}
                    style={{ color: "#fbbf24" }}
                  />
                  <h3 className="fs-5 fw-semibold text-white mb-2">
                    NCAT Participant
                  </h3>
                  <p className="small mb-0" style={{ color: "#d1d5db" }}>
                    Demonstrated strong analytical and problem-solving skills
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div
                  className="p-4 rounded text-center h-100"
                  style={{
                    backgroundColor: "rgba(31, 41, 55, 0.5)",
                    backdropFilter: "blur(4px)",
                    border: "1px solid #374151",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = "#a855f7";
                    e.target.style.transform = "scale(1.02)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = "#374151";
                    e.target.style.transform = "scale(1)";
                  }}
                >
                  <Code
                    className="mx-auto mb-3"
                    size={48}
                    style={{ color: "#60a5fa" }}
                  />
                  <h3 className="fs-5 fw-semibold text-white mb-2">
                    Flipkart Grid 6.0
                  </h3>
                  <p className="small mb-0" style={{ color: "#d1d5db" }}>
                    Participated in nationwide hackathon organized by Flipkart
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div
                  className="p-4 rounded text-center h-100"
                  style={{
                    backgroundColor: "rgba(31, 41, 55, 0.5)",
                    backdropFilter: "blur(4px)",
                    border: "1px solid #374151",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.borderColor = "#a855f7";
                    e.target.style.transform = "scale(1.02)";
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.borderColor = "#374151";
                    e.target.style.transform = "scale(1)";
                  }}
                >
                  <GraduationCap
                    className="mx-auto mb-3"
                    size={48}
                    style={{ color: "#10b981" }}
                  />
                  <h3 className="fs-5 fw-semibold text-white mb-2">
                    GATE Preparation
                  </h3>
                  <p className="small mb-0" style={{ color: "#d1d5db" }}>
                    Enhanced knowledge of core engineering concepts
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-5"
          style={{ backgroundColor: "rgba(31, 41, 55, 0.3)" }}
        >
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <h2
                  className="fw-bold mb-4"
                  style={{
                    fontSize: "2.5rem",
                    background: "linear-gradient(to right, #c084fc, #f472b6)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Let's Connect
                </h2>

                <p
                  className="fs-5 mb-5 mx-auto"
                  style={{
                    color: "#d1d5db",
                    maxWidth: "32rem",
                  }}
                >
                  I'm always open to discussing new opportunities and
                  interesting projects. Let's build something amazing together!
                </p>

                <div className="d-flex flex-wrap justify-content-center gap-3">
                  <a
                    href="mailto:sakshi.kakde2004@gmail.com"
                    className="btn d-flex align-items-center gap-3 px-4 py-3 rounded-pill text-white text-decoration-none fw-medium"
                    style={{
                      background: "linear-gradient(to right, #a855f7, #ec4899)",
                      border: "none",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.transform = "scale(1.05)";
                      e.target.style.boxShadow =
                        "0 10px 25px rgba(168, 85, 247, 0.25)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "scale(1)";
                      e.target.style.boxShadow = "none";
                    }}
                  >
                    <Mail size={24} />
                    Send Email
                  </a>

                  <a
                    href="tel:7083375279"
                    className="btn d-flex align-items-center gap-3 px-4 py-3 rounded-pill text-white text-decoration-none fw-medium"
                    style={{
                      border: "1px solid #4b5563",
                      backgroundColor: "transparent",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = "#1f2937";
                      e.target.style.transform = "scale(1.05)";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = "transparent";
                      e.target.style.transform = "scale(1)";
                    }}
                  >
                    <Phone size={24} />
                    Call Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer
          className="py-4 border-top"
          style={{ borderColor: "#374151 !important" }}
        >
          <div className="container">
            <div className="text-center">
              <p className="mb-0" style={{ color: "#9ca3af" }}>
                © 2025 Sakshi Kakde.
              </p>
            </div>
          </div>
        </footer>

        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes pulse {
            0%,
            100% {
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
          }

          @keyframes bounce {
            0%,
            20%,
            53%,
            80%,
            100% {
              transform: translate3d(0, 0, 0);
            }
            40%,
            43% {
              transform: translate3d(0, -30px, 0);
            }
            70% {
              transform: translate3d(0, -15px, 0);
            }
            90% {
              transform: translate3d(0, -4px, 0);
            }
          }

          @keyframes ping {
            75%,
            100% {
              transform: scale(2);
              opacity: 0;
            }
          }

          html {
            scroll-behavior: smooth;
          }

          .progress-bar {
            transition: width 1s ease-out !important;
          }

          .navbar-toggler:focus {
            box-shadow: none;
          }

          .nav-link:hover {
            background-color: #374151 !important;
            transform: scale(1.05) !important;
          }
        `}</style>

        {/* Bootstrap JS CDN */}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.0/js/bootstrap.bundle.min.js"></script>
      </div>
    </>
  );
};

export default Portfolio;
