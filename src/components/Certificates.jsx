import React from "react";
import { Award } from "lucide-react";

const Certificates = () => {
  const certificates = [
    { name: "AWS Cloud Architecture", issuer: "AWS" },
    { name: "Machine Learning By Data Science Project", issuer: "IBM" },
    { name: "Getting Started With Enterprise Data Science", issuer: "IBM" },
    { name: "Learning Node.js", issuer: "LinkedIn Learning" },
    { name: "React Essential Training", issuer: "LinkedIn Learning" },
    { name: "AWS Cloud Foundation", issuer: "AWS" },
    { name: "HTML for Programmers", issuer: "LinkedIn Learning" },
    { name: "CSS for Developers", issuer: "LinkedIn Learning" },
    { name: "Learning the JavaScript", issuer: "LinkedIn Learning" },
    { name: "Git Essential Training", issuer: "LinkedIn Learning" },
  ];

  return (
    <section
      id="certificates"
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
          Certificates
        </h2>

        <div className="row g-4">
          {certificates.map((cert, index) => (
            <div key={index} className="col-md-4">
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
                  {cert.name}
                </h3>
                <p className="small mb-0" style={{ color: "#d1d5db" }}>
                  {cert.issuer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
