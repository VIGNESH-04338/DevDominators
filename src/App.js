// import "./App.css";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Features from "./components/Features";
// import Events from "./components/Events";
// import Footer from "./components/Footer";

// function App() {
//   return (
//     <div>

//       <Navbar />
//       <Hero />
//       <Features />
//       <Events />
//       <Footer />

//     </div>
//   );
// }

// export default App;
// import "./App.css";
// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import Features from "./components/Features";
// import Events from "./components/Events";
// import Footer from "./components/Footer";
// import Login from './components/Login';

// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';


// function App(){
//   return (
//     <Router>
//       <Navbar title="Text Analyzer"/>
//       <Routes>
//         <Route path="/login" element={<Login/>}/>
//       </Routes>
//     </Router>
//   );
// }

// export default App;


import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Events from './components/Events';
import Footer from './components/Footer';
import Login from './components/Login';
import Register from './components/Register';
import Event from './components/Event';
import Dashboard from './components/Dashboard';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>

      <Navbar />

      <Routes>

        {/* Home Page */}
        <Route path="/" element={
          <div>
            <Hero />
            <Features />
            <Events/>
          </div>
        } />

        {/* Login Page */}
        <Route path="/event" element={<Event />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      <Footer />

    </Router>
  );
}

export default App;