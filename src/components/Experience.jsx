import React from "react";

const Experience = () => {
  const experiences = [
    {
      title: "Intern Trainee Engineer",
      company: "Just Logic Software Pvt Ltd",
      period: "Feb 2025 - June 2025",
      type: "Hybrid",
      description:
        "completed a 4-month internship as an Intern Trainee Engineer, contributing to ongoing projects while aligning with company goals.",
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
        "Developed and maintained web applications using HTML, CSS, and JavaScript, enhancing user experience and functionality.",
      icon: "🌐",
    },
  ];

  return (
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
              <p className="mb-0" style={{ color: "#d1d5db", lineHeight: 1.6 }}>
                {exp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
