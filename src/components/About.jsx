import React from "react";
import { MapPin, Phone, Mail, GraduationCap } from "lucide-react";

const About = () => {
  return (
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
                  2022 - 2025 | CGPA: 7.44/10
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
  );
};

export default About;
