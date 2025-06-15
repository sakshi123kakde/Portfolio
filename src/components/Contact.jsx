import React from "react";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
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
              I'm always open to discussing new opportunities and interesting
              projects. Let's build something amazing together!
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
  );
};

export default Contact;
