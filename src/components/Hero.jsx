import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Phone, Code, ChevronDown } from "lucide-react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
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
    </>
  );
};

export default Hero;
