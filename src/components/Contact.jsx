function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="section-heading">
          <span>Contact Us</span>
          <h2>We'd Love to Hear From You</h2>
          <p>
            Have a question about admission, programs, or university services?
            Get in touch with Jami University.
          </p>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">📍</div>
              <div>
                <h3>Our Location</h3>
                <p>Herat, Afghanistan</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">📞</div>
              <div>
                <h3>Phone</h3>
                <p>+93 40 000 0000</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">✉️</div>
              <div>
                <h3>Email</h3>
                <p>info@jami.edu.af</p>
              </div>
            </div>

            <div className="contact-item">
              <div className="contact-icon">🕒</div>
              <div>
                <h3>Office Hours</h3>
                <p>Saturday - Thursday</p>
                <small>8:00 AM - 4:00 PM</small>
              </div>
            </div>
          </div>

          <form className="contact-form">
            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                <input type="text" placeholder="Enter your name" />
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="Enter your email" />
              </div>
            </div>

            <div className="form-group">
              <label>Subject</label>
              <input type="text" placeholder="What is your message about?" />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea rows="6" placeholder="Write your message..."></textarea>
            </div>

            <button type="submit" className="contact-btn">
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
