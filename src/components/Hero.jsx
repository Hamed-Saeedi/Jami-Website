function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="hero-badge">دانشگاه جامی هرات</p>

        <h1>
          آینده‌ات را
          <span> از امروز بساز</span>
        </h1>

        <p className="hero-text">
          محیطی برای یادگیری، رشد و ساختن آینده‌ای روشن. در کنار ما دانش و مهارت
          خود را به فرصت تبدیل کنید.
        </p>

        <div className="hero-buttons">
          <a href="#faculties" className="btn primary-btn">
            پوهنځی‌های ما
          </a>

          <a href="#about" className="btn secondary-btn">
            بیشتر بدانید
          </a>
        </div>
      </div>

      <div className="hero-decoration">
        <div className="circle circle-one"></div>
        <div className="circle circle-two"></div>
        <div className="hero-card">
          <span>J</span>
          <strong>JAMI</strong>
          <small>University</small>
        </div>
      </div>
    </section>
  );
}

export default Hero;
