function Events() {
  return (
    <section className="events">

        <h1><b>Upcoming Events</b></h1>

        <div className="event-container">

        <div className="event-card">
        <h2>Hackathon</h2>
        <p>24 hour coding challenge</p>
        <button className="event-btn">Register</button>
        </div>

        <div className="event-card">
        <h2>AI Workshop</h2>
        <p>Learn Machine Learning basics</p>
        <button className="event-btn">Register</button>
        </div>

        <div className="event-card">
        <h2>Web Development Bootcamp</h2>
        <p>Build modern websites</p>
        <button className="event-btn">Register</button>
        </div>

        </div>

    </section>
  );
}

export default Events;