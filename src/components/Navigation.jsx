import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
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

        <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">
            {[
              "About",
              "Experience",
              "Projects",
              "Skills",
              "Certificates",
              "Contact",
            ].map((item) => (
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
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
