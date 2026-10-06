function WhyJami() {
  const features = [
    {
      icon: "🎓",
      title: "محیط آموزشی مناسب",
      text: "محیطی برای یادگیری، تمرکز و پیشرفت دانشجویان.",
    },
    {
      icon: "👨‍🏫",
      title: "آموزش با کیفیت",
      text: "توجه به دانش تخصصی و مهارت‌های کاربردی.",
    },
    {
      icon: "🔬",
      title: "توجه به پژوهش",
      text: "تشویق دانشجویان به تحقیق، مطالعه و فعالیت علمی.",
    },
    {
      icon: "🌱",
      title: "رشد و توسعه",
      text: "کمک به دانشجویان برای رشد علمی و فردی.",
    },
  ];

  return (
    <section className="why-jami section">
      <div className="container">
        <div className="section-heading">
          <div>
            <span className="section-label">چرا پوهنتون جامی؟</span>

            <h2>بیشتر از یک محیط آموزشی</h2>
          </div>

          <p>
            هدف ما فراهم‌کردن محیطی است که دانشجویان بتوانند در آن یاد بگیرند،
            تجربه کنند و رشد کنند.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.title}>
              <div className="feature-icon">{feature.icon}</div>

              <h3>{feature.title}</h3>

              <p>{feature.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyJami;
