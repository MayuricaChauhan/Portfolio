import React from 'react';
import './AppointmentPage.css';

function AppointmentPage() {
  return (
    <div className="appointment-page">
      <header className="header">
        <h1>Begin Your Success Story Here</h1>
        <p>Your dreams deserve expert guidance. Let's map your future together.</p>
        <p>Every great achievement starts with a single decision to try. Make that decision today.</p>
      </header>

      <section className="session-overview">
        <h2>Discover Your Path</h2>
        <h3>30-minute Exploration Session</h3>
        <ul>
          <li>✓ Mapping your interests</li>
          <li>✓ Identifying your true potential</li>
          <li>✓ Initial roadmap creation</li>
        </ul>
        <p className="free">Free of cost!</p>
      </section>

      <section className="journey-steps">
        <h2>Your Journey to Success</h2>
        <div className="steps">
          <div className="step">
            <h3>1. Choose Your Path</h3>
            <p>Select the session that matches your needs</p>
          </div>
          <div className="step">
            <h3>2. Book Your Time</h3>
            <p>Choose a convenient slot in the calendar</p>
          </div>
          <div className="step">
            <h3>3. Share Your Story</h3>
            <p>Fill a brief questionnaire about your goals</p>
          </div>
          <div className="step">
            <h3>4. Begin Your Journey</h3>
            <p>Meet online and map your future</p>
          </div>
        </div>
      </section>

      <section className="faq">
        <h2>Common Questions</h2>
        <p><strong>How are sessions conducted?</strong> All sessions are held online via Zoho, making it convenient for you to connect from anywhere.</p>
        <p><strong>What if I need to reschedule?</strong> No worries! You can reschedule any time prior to your session at no extra cost.</p>
        <p><strong>Can my parents join the session?</strong> Absolutely! Family members are welcome to join and participate in the discussion.</p>
      </section>

      <footer className="footer">
        <p>Your journey to academic excellence begins with a single step.</p>
        <a href="https://educationandcareercounsellor.zohobookings.in/#/educationandcareercounsellor" className="book-session">Book Your Session Now</a>
      </footer>
    </div>
  );
}

export default AppointmentPage;
