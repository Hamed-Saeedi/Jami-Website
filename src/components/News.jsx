function News() {
  const news = [
    {
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
      category: "اخبار دانشگاه",
      date: "۲۵ سنبله ۱۴۰۵",
      title: "آغاز سال تحصیلی جدید در پوهنتون جامی",
      description:
        "پوهنتون جامی سال تحصیلی جدید را با حضور استادان و دانشجویان آغاز کرد.",
    },
    {
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87",
      category: "رویدادها",
      date: "۱۸ سنبله ۱۴۰۵",
      title: "برگزاری سمینار علمی دانشجویان",
      description:
        "سمینار علمی با حضور استادان و دانشجویان با هدف تبادل دانش و تجربه برگزار شد.",
    },
    {
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655",
      category: "آموزش",
      date: "۱۰ سنبله ۱۴۰۵",
      title: "کارگاه آموزشی مهارت‌های دیجیتال",
      description:
        "یک کارگاه آموزشی با محوریت تکنولوژی و مهارت‌های دیجیتال برای دانشجویان برگزار شد.",
    },
  ];

  return (
    <section className="news" id="news">
      <div className="section-heading">
        <p className="section-label">تازه‌ترین مطالب</p>

        <h2>
          اخبار و <span>رویدادها</span>
        </h2>

        <p>از آخرین اخبار، رویدادها و فعالیت‌های علمی پوهنتون باخبر شوید.</p>
      </div>

      <div className="news-grid">
        {news.map((item) => (
          <article className="news-card" key={item.title}>
            <div className="news-image">
              <img src={item.image} alt={item.title} />

              <span className="news-category">{item.category}</span>
            </div>

            <div className="news-content">
              <div className="news-date">📅 {item.date}</div>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              <a href="#contact" className="news-link">
                ادامه مطلب →
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="news-more">
        <a href="#news">مشاهده همه اخبار</a>
      </div>
    </section>
  );
}

export default News;
