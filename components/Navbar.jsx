"use client";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="nav-inner">
        <a href="#" className="logo">
          JQ
        </a>

        <div className="links">
          <a href="#work" className="nav-link">
            Work
          </a>

          <a href="#about" className="nav-link">
            About
          </a>

          <a href="mailto:jqhxnn@outlook.com" className="nav-link">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
