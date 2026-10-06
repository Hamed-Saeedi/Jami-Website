import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#" className="logo">
          <span>J</span>
          پوهنتون جامی
        </a>

        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>
            خانه
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            درباره ما
          </a>
          <a href="#faculties" onClick={() => setMenuOpen(false)}>
            پوهنځی‌ها
          </a>
          <a href="#news" onClick={() => setMenuOpen(false)}>
            اخبار
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            تماس با ما
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
