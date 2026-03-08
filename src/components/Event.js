import React from "react";

function Event() {
  return (
    <div className="body">

      <style>{`
        .body{
          font-family: Arial;
          background:#f4f6fb;
          min-height:100vh;
        }

        .navbar{
          display:flex;
          justify-content:space-between;
          align-items:center;
          background:#146c43;
          color:white;
          padding:15px 30px;
        }

        .navLinks span{
          margin-left:20px;
          cursor:pointer;
        }

        .container{
          padding:30px;
        }

        .stats{
          display:flex;
          gap:20px;
          margin-bottom:30px;
        }

        .statCard{
          flex:1;
          background:white;
          padding:20px;
          text-align:center;
          border-radius:10px;
          box-shadow:0 4px 10px rgba(0,0,0,0.1);
        }

        .eventsGrid{
          display:grid;
          grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
          gap:20px;
          margin-top:20px;
        }

        .eventCard{
          background:white;
          padding:20px;
          border-radius:10px;
          box-shadow:0 4px 10px rgba(0,0,0,0.1);
          transition:transform 0.3s ease, box-shadow 0.3s ease;
        }

        /* HOVER EFFECT */
        .eventCard:hover{
          transform:translateY(-8px) scale(1.03);
          box-shadow:0 10px 25px rgba(0,0,0,0.2);
        }

        .button{
          margin-top:10px;
          padding:8px 15px;
          border:none;
          background:#4c5fd7;
          color:white;
          border-radius:5px;
          cursor:pointer;
          transition:background 0.3s;
        }

        .button:hover{
          background:#2f3fb5;
        }

      `}</style>

      {/* Navbar */}
      <div className="navbar">
        <h3>College Events</h3>
        <div className="navLinks">
          <span>Home</span>
          <span>Calendar</span>
        </div>
      </div>

      <div className="container">

        {/* Stats */}
        <div className="stats">
          <div className="statCard">
            <h3>4</h3>
            <p>Upcoming Events</p>
          </div>

          <div className="statCard">
            <h3>5</h3>
            <p>Registered Events</p>
          </div>

          <div className="statCard">
            <h3>8</h3>
            <p>Active Clubs</p>
          </div>
        </div>

        {/* Upcoming Events */}
        <h2>Upcoming Events</h2>

        <div className="eventsGrid">

          <div className="eventCard">
            <h3>Hackathon 2026 💻</h3>
            <p>Date: March 20</p>
            <p>Location: Auditorium</p>
            <button className="button">Register</button>
          </div>

          <div className="eventCard">
            <h3>Cultural Fest 🎭</h3>
            <p>Date: April 5</p>
            <p>Location: Main Ground</p>
            <button className="button">Register</button>
          </div>

          <div className="eventCard">
            <h3>AI Workshop 🤖</h3>
            <p>Date: April 10</p>
            <p>Location: Lab 3</p>
            <button className="button">Register</button>
          </div>

          <div className="eventCard">
            <h3>Sports Meet 🏆</h3>
            <p>Date: April 15</p>
            <p>Location: Stadium</p>
            <button className="button">Register</button>
          </div>

        </div>

        <br/><br/>

        {/* Ongoing Events */}
        <h2>Ongoing Events</h2>

        <div className="eventsGrid">

          <div className="eventCard">
            <h3>Web Development Bootcamp 🌐</h3>
            <p>March 18 – March 20</p>
            <p>Location: Computer Lab 2</p>
            <button className="button">Register</button>
          </div>

          <div className="eventCard">
            <h3>Robotics Workshop 🤖</h3>
            <p>Date: March 19</p>
            <p>Location: Robotics Lab</p>
            <button className="button">Register</button>
          </div>

          <div className="eventCard">
            <h3>Chess Tournament ♟️</h3>
            <p>Date: March 20</p>
            <p>Location: Indoor Stadium</p>
            <button className="button">Register</button>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Event;