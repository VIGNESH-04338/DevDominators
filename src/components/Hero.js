// function Hero() {

// const navigate = useNavigate();

// const handleLogin = () => {

// navigate("/dashboard");

// };

//   return (
//     <section className="hero">
//       <h1>Smart Event Management for Colleges</h1>
//       <p>Discover and register for college events easily.</p>
//       {/* <button>Explore Events</button> */}
//       <button className="login-btn" onClick={handleLogin}>
//         Explore Events
//       </button>
//     </section>
//   );
// }

// export default Hero;

import React from "react";
import { useNavigate } from "react-router-dom";

function Hero() {

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/event");
  };

  return (
    <section className="hero">
      <h1>Smart Event Management for Colleges</h1>
      <p>Discover and register for college events easily.</p>

      <button className="login-btn" onClick={handleLogin}>
        Explore Events
      </button>
    </section>
  );
}

export default Hero;