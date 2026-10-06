function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-content">
          <p className="section-label">درباره ما</p>

          <h2>
            جایی برای یادگیری，
            <span> رشد و ساختن آینده</span>
          </h2>

          <p>
            پوهنتون جامی با هدف فراهم‌سازی یک محیط علمی و پویا برای دانشجویان
            ایجاد شده است؛ محیطی که در آن دانش، تجربه و مهارت در کنار یکدیگر
            قرار می‌گیرند.
          </p>

          <p>
            ما باور داریم آموزش فقط به کلاس و کتاب محدود نمی‌شود. دانشجویان باید
            فرصت کشف، تجربه و ساختن آینده خود را داشته باشند.
          </p>

          <a href="#contact" className="about-btn">
            با ما آشنا شوید
          </a>
        </div>

        <div className="about-stats">
          <div className="stat-card">
            <strong>20+</strong>
            <span>سال فعالیت</span>
          </div>

          <div className="stat-card">
            <strong>5K+</strong>
            <span>دانشجو</span>
          </div>

          <div className="stat-card">
            <strong>100+</strong>
            <span>استاد</span>
          </div>

          <div className="stat-card">
            <strong>10+</strong>
            <span>پوهنځی و دیپارتمنت</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
