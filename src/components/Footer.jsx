function Footer() {
  const links = [
    { label: "خانه", href: "#home" },
    { label: "درباره ما", href: "#about" },
    { label: "پوهنځی‌ها", href: "#faculties" },
    { label: "اخبار", href: "#news" },
    { label: "تماس با ما", href: "#contact" },
  ];

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-brand">
          <h2>پوهنتون جامی</h2>

          <p>محیطی برای دانش، رشد و ساختن آینده‌ای روشن.</p>
        </div>

        <div className="footer-links">
          <h3>دسترسی سریع</h3>

          {links.map((link) => (
            <a href={link.href} key={link.label}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="footer-contact">
          <h3>ارتباط با ما</h3>

          <p>📍 هرات، افغانستان</p>
          <p>📞 +93 7XX XXX XXX</p>
          <p>✉️ info@jami.edu.af</p>
        </div>
      </div>

      <div className="copyright">
        <div className="container">
          © 2026 پوهنتون جامی هرات — تمامی حقوق محفوظ است.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
