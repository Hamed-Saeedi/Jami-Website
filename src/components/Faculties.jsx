function Faculties() {
  const faculties = [
    {
      icon: "💻",
      title: "پوهنځی کمپیوتر ساینس",
      description:
        "آموزش برنامه‌نویسی، تکنولوژی معلوماتی و سیستم‌های نرم‌افزاری.",
    },
    {
      icon: "⚖️",
      title: "پوهنځی حقوق",
      description:
        "آموزش علوم حقوقی و آماده‌سازی دانشجویان برای فعالیت حرفه‌ای.",
    },
    {
      icon: "📊",
      title: "پوهنځی اقتصاد",
      description: "مطالعه اقتصاد، مدیریت، تجارت و مهارت‌های کسب‌وکار.",
    },
    {
      icon: "🩺",
      title: "پوهنځی علوم صحی",
      description: "فراگیری دانش و مهارت‌های اساسی در حوزه علوم صحی.",
    },
  ];

  return (
    <section className="faculties" id="faculties">
      <div className="section-heading">
        <p className="section-label">آموزش و دانش</p>

        <h2>
          پوهنځی‌های <span>دانشگاه جامی</span>
        </h2>

        <p>رشته مورد علاقه خود را انتخاب کنید و مسیر آینده‌تان را بسازید.</p>
      </div>

      <div className="faculty-grid">
        {faculties.map((faculty) => (
          <div className="faculty-card" key={faculty.title}>
            <div className="faculty-icon">{faculty.icon}</div>

            <h3>{faculty.title}</h3>

            <p>{faculty.description}</p>

            <a href="#contact">بیشتر بدانید →</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faculties;
