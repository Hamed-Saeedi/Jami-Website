function Stats() {
  const stats = [
    {
      number: "01",
      title: "محیط علمی",
      text: "فضایی مناسب برای یادگیری و رشد علمی",
    },
    {
      number: "02",
      title: "آموزش تخصصی",
      text: "تمرکز بر دانش و مهارت‌های مورد نیاز",
    },
    {
      number: "03",
      title: "رشد فردی",
      text: "کمک به دانشجویان برای ساختن آینده بهتر",
    },
    {
      number: "04",
      title: "فرصت‌های جدید",
      text: "زمینه‌ای برای تجربه، فعالیت و پیشرفت",
    },
  ];

  return (
    <section className="stats">
      <div className="container stats-grid">
        {stats.map((stat) => (
          <div className="stat" key={stat.number}>
            <span>{stat.number}</span>

            <div>
              <h3>{stat.title}</h3>
              <p>{stat.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;
