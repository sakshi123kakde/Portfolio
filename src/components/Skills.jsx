import React from "react";

const Skills = () => {
  const skills = [
    { name: "React.js", level: 80, color: "#3b82f6" },
    { name: "Node.js", level: 70, color: "#10b981" },
    { name: "JavaScript", level: 90, color: "#fbbf24" },
    { name: "Java", level: 75, color: "#ef4444" },
    { name: "Angular", level: 75, color: "#dc2626" },
    { name: "Express.js", level: 70, color: "#4b5563" },
    { name: "SQL", level: 65, color: "#2563eb" },
    { name: "Firebase", level: 70, color: "#f97316" },
  ];

  return (
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
          <h3 className="fs-3 fw-semibold mb-4" style={{ color: "#c084fc" }}>
            Tools & Technologies
          </h3>
          <div className="d-flex flex-wrap justify-content-center gap-3">
            {[
              "HTML",
              "CSS",
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
  );
};

export default Skills;
