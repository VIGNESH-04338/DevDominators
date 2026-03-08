import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">CollegeEvents</div>

      <div className="nav-links">
        <Link to="/" className="nav-btn">Home</Link>
        <Link to="/event" className="nav-btn">Events</Link>
        <Link to="/login" className="nav-btn">Login</Link>
        <Link to="/register" className="nav-btn">Register</Link>
      </div>
    </nav>
  );
}

export default Navbar;


// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="logo">CollegeEvents</div>

//       <div className="nav-links">
//         <Link to="/" className="nav-btn">Home</Link>
//         <Link to="/event" className="nav-btn">Event</Link>
//         <Link to="/login" className="nav-btn">Login</Link>
//         <Link to="/register" className="nav-btn">Register</Link>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="logo">CollegeEvents</div>

//       <ul className="nav-links">
//         <Link to="/" className="nav-btn">Home</Link>
//         <Link to="/events" className="nav-btn">Events</Link>
//         <Link to="/login" className="nav-btn">Login</Link>
//         <Link to="/register" className="nav-btn">Register</Link>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;